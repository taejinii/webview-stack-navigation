"use client"

import Button from "@/components/Button";

export default function BackButton(){
    const nativeBack = () =>{
        if(window.webkit) {
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action: "pop"
            });
        }
    }
    return <Button onClick={nativeBack}>Native Back Button</Button>

}