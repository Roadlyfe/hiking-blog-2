import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
    posts: Post[];
}

function BlogList({ posts }: Props) {
    return (
        <div>
            <hr className="border-[#02c39a] mb-10" />
            <div>
                {/* Posts */}
                {posts.map(post => (
                    <div key={post._id}>
                        <div>
                            <Image
                                className="object-cover object-left lg:object-center"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList
