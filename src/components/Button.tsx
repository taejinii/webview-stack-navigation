"use client"

import {ComponentProps} from "react";

interface ButtonProps extends ComponentProps<'button'>{
    children?: React.ReactNode
}

export default function Button({...props}:ButtonProps){
    const {children,...buttonProps}=props
    return <button className='text-sky-700 p-2 bg-blue-200 rounded-md' {...buttonProps}>{children}</button>
}