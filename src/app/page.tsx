'use client'

import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleBridgeCall=()=>{
      if(window.webkit){
          window.webkit.messageHandlers.actionHandler.postMessage('test')
      }
  }
const move = () =>{
    window.webkit.messageHandlers.navigationHandler.postMessage({
        action: "push",
        url: "https://webview-stack-navigation.vercel.app/my-page"
    });
}


  return (
      <div className='flex flex-col'>
        <button onClick={move}>Move To Page</button>
          <button className='text-sky-700 p-2 bg-blue-200  rounded-md' onClick={handleBridgeCall}>IOS Called</button>
      </div>
  );
}
