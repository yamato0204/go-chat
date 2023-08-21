import { atom } from "recoil";
import { Message } from "../models/message";


export const messageListAtom = atom<Message[]>({
    key: "messageList",
  default: [],
})