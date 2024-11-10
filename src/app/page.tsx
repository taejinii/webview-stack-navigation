
import PostList from "@/app/post-list";
import Link from "next/link";

export default async function Home() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();

  return (
      <div className='h-full'>
          <Link className='rounded-md p-2 flex justify-center items-center bg-blue-200 text-sky-600' href='/number/1'>Number Page</Link>
          <PostList posts={posts}/>
      </div>
  );
}
