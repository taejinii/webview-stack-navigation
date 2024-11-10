"use client"

import Button from "@/components/Button";

export default function TestButton() {

    const nativePush = () => {
        if (window.webkit) {
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action: "push",
                url: `https://webview-stack-navigation.vercel.app/test`,
            });
        }
    };
    return <Button onClick={nativePush}>테스트 페이지 이동</Button>
}