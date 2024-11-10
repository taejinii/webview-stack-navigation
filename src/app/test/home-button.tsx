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
    return <Button onClick={moveToHome}>Native 2 steps pop Button</Button>
}