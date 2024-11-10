"use client"

import {useRouter} from "next/navigation";
import Button from "@/components/Button";

export default function WebPushButton(){
    const router = useRouter()

    return <Button onClick={()=>{router.push("https://webview-stack-navigation.vercel.app/test")}}>Web Push Button</Button>
}