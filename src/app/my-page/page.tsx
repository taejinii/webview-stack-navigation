'use client'

import {useRouter} from "next/navigation";

export default function MyPage(){
    const router = useRouter()
    return(
        <div className='flex flex-col'>
            <h1 className='text-4xl'>MyPage</h1>
            <button onClick={()=>router.push('about')}>Move to About Page</button>
            <button onClick={()=>router.back()}>Back</button>
        </div>
    )
}