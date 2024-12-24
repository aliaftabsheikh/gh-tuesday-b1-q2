import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const fetchBlogs = `
  *[_type == "blog"]{
  title,
    content, 
     heading,
     image,
     slug
}
  `;

  const sanityData = await client.fetch(fetchBlogs)

  console.log(sanityData);

  return (
  <>
  <h1 className="text-center">BLOG APP</h1>

  <div >
    {
      sanityData?.map((blog, index) => (
        <Link href={`blog/${blog.slug.current}`} key={index} className="bg-gray-200 border border-gray-300 p-4 my-4 text-black">

          <h2 className="text-2xl font-bold">
            
          {blog.heading}
          </h2>

          <Image
            src={urlFor(blog.image).url()}
            alt="blog image"
            width={200}
            height={200}/>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </Link>
      ))
    }
  </div>
   </>


);
}
