import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "../../components/PreviewBlogList";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  catagories[]->
} | order(_createdAt desc)
`;

export default async function homePage() {

  if (previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#06d6a0]">Loading Preview Data...</p>
        </div>
      )}
      >
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
}



