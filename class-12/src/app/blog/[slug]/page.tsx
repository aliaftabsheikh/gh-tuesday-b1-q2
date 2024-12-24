import { client } from '@/sanity/lib/client'
import React from 'react'

const page = async ({params}) => {
    console.log(params.slug)

    const singleBlogQuery = `*[_type == "blog" && slug.current == ${params.slug}]{
  title,
    content, 
     heading, 
     image,
}`

const sanityData = await client.fetch(singleBlogQuery)

console.log(sanityData)
  return (
    <div>SLUG</div>
  )
}

export default page