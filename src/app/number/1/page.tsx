import NativePushButton from "@/app/number/native-push-button";
import Link from "next/link";

export default function One(){
    return <div className='flex flex-col gap-1'>
        <h1 className='text-4xl font-extrabold'>1 Page</h1>
        <NativePushButton number={2}/>
        <Link href="/">Home</Link>
    </div>
}