'use client'

import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
      <div className='flex flex-col'>
        <button onClick={()=>router.push('my-page')}>Move To Page</button>
          <button className='text-sky-700 p-2 bg-blue-200  rounded-md' onClick={()=>window.webkit.actionHandler.postMessage('test')}>IOS Called</button>
      </div>
  );
}
