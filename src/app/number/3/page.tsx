import NativePushButton from "@/app/number/native-push-button";

export default function Three(){
    return <div className='flex flex-col gap-1'>
        <h1 className='text-4xl font-extrabold'>3 Page</h1>
        <NativePushButton number={4}/>
    </div>
}