import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

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
      <div>Preview Mode</div>
    )
  }

  const posts = await client.fetch(query);
  
  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
}



