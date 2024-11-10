"use client"

import Button from "@/components/Button";

export default function HomeButton() {
    const moveToHome=()=>{
        if(window.webkit){
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action:"pop",
                steps:2
            })
        }
    }
    return <Button onClick={moveToHome}>초기화면으로 돌아가기</Button>
}