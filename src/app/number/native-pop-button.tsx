"use client"

import Button from "@/components/Button";

export default function NativePopButton({steps = 1}:{steps:number}){

    const pop=()=>{
        if(window.webkit){
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action:"pop",
                steps
            })
        }
    }
    return <Button onClick={pop}>Go to {4- steps} page </Button>
}