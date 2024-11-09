'use client'

import {useRouter} from "next/navigation";

export default function AboutPage(){
    const router=useRouter()
    return (
        <div className='flex flex-col'>
            <h1 className='text-4xl'>About Page</h1>
            <button onClick={() => router.back()}>Back</button>
        </div>
    )
}