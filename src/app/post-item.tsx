'use client'
import { Post } from "@/app/post-list";

export default function PostItem({ ...post }: Post) {
    const nativePush = () => {
        if (window.webkit) {
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action: "push",
                url: `https://webview-stack-navigation.vercel.app/${post.id}`,
            });
        }
    };

    return (
        <div
            className="w-full border border-gray-300 rounded-lg p-4 shadow-sm "
            onClick={nativePush}
        >
            <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
        </div>
    );
}