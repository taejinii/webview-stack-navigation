"use client"

import Button from "@/components/Button";

export default function NativePushButton({number = 1}:{number:number}){
    const pop=()=>{
        if(window.webkit){
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action:"push",
                url: `https://webview-stack-navigation.vercel.app/number/${number}`,
            })
        }
    }
    return <Button onClick={pop}>Go to {number} Page </Button>
}