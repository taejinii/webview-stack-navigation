
import PostList from "@/app/post-list";

export default async function Home() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();

  return (
      <div className='h-full'>
          <PostList posts={posts}/>
      </div>
  );
}
