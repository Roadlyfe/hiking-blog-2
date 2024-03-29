import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60; // revalidate this page every 60 seconds. 

export default async function homePage() {

  if (previewData()) {
    return (
      <PreviewSuspense 
        fallback = {(
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#a3b18a]">Loading Preview Data...</p>
        </div>
      )}
      >
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />
}



