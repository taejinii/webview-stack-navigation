export {}

declare global{
    interface Window{
        webkit:{
            messageHandlers:{
                actionHandler:{
                    postMessage:(param:string)=>void;
                },
                navigationHandler:{
                    postMessage:({action,url}:{action:string;url?:string})=>void;
                }
            }
        }
    }
}