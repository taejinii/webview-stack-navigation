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
    return <Button onClick={nativeBack}>네이티브 뒤로가기 버튼</Button>

}