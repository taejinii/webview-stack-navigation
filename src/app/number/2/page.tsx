import NativePushButton from "@/app/number/native-push-button";

export default function Two(){
    return <div className='flex flex-col gap-1'>
        <h1 className='text-4xl font-extrabold'>2 Page</h1>
        <NativePushButton number={3}/>
        <NativePushButton number={4}/>
    </div>
}