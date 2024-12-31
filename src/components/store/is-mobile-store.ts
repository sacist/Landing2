import { createStore,createEvent } from "effector";

export const setIsMobile=createEvent<boolean>()

export const $isMobile=createStore(false).on(setIsMobile,(_,value)=>value)

