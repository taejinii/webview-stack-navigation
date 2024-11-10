import NativePopButton from "@/app/number/native-pop-button";

export default function Four() {
  return   <div className='flex flex-col gap-1'>
        <h1 className='text-4xl font-extrabold'>4 Page</h1>
      <NativePopButton steps={3}/>
      <NativePopButton steps={2}/>
      <NativePopButton steps={1}/>
  </div>
}