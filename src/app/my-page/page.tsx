'use client'

import {useRouter} from "next/navigation";

export default function MyPage(){
    const router = useRouter()

    const prev = () =>{
// 이전 페이지로 돌아가기
        if(window.webkit) {
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action: "pop"
            });
        }
    }

    return(
        <div className='flex flex-col'>
            <h1 className='text-4xl'>MyPage</h1>
            <button onClick={()=>router.push('about')}>Move to About Page</button>
            <button onClick={prev}>Back</button>
        </div>
    )
}