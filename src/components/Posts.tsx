import Link from "next/link"
import { Suspense } from "react"
import PostSkeleton from "./PostSkeleton"
import Post from "./Post"

export default function Posts ({id}: {id: number}) {
  return (
    <Link key={id} href={`/${id}`}>
      <Suspense fallback={<PostSkeleton />}>
        <Post id={id}/>
      </Suspense>
    </Link>
  )
}