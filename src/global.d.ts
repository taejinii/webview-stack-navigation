export {}

declare global{
    interface Window{
        webkit:{
            messageHandlers:{
                actionHandler:{
                    postMessage:(param:string)=>void;
                }
            }
        }
    }
}