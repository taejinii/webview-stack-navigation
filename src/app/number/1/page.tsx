import NativePushButton from "@/app/number/native-push-button";

export default function One(){
    return <div className='flex flex-col gap-1'>
        <h1 className='text-4xl font-extrabold'>1 Page</h1>
        <NativePushButton number={2}/>
        <NativePushButton number={3}/>
        <NativePushButton number={4}/>
    </div>
}