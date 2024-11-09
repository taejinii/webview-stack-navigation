import PostItem from "@/app/post-item";

export interface Post{
    id:number;
    title:string;
    body:string;
    userId:number
}

interface Posts{
    posts:Post[]
}

export default function PostList({posts}:Posts){
    return <ul className="space-y-4 list-disc list-inside">{posts.map((post)=><PostItem key={post.id} {...post}/>)}</ul>
}
