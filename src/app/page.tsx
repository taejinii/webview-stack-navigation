'use client'

import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
      <div className='h-screen flex items-center justify-center'>
        <button onClick={()=>router.push('my-page')}>Move To Page</button>
      </div>
  );
}
