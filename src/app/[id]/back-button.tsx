"use client"

export default function BackButton(){
    const nativeBack = () =>{
        if(window.webkit) {
            window.webkit.messageHandlers.navigationHandler.postMessage({
                action: "pop"
            });
        }
    }
    return <button className='text-sky-700 p-2 bg-blue-200  rounded-md' onClick={nativeBack}>네이티브 뒤로가기 버튼</button>

}