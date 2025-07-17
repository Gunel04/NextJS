import { create } from "zustand";
interface listType {
    name: string,
    surname: string
}
interface storeType {
    list: listType[],
    addingList: (name:string, surname:string) => void
}
export const useStore = create<storeType>((set) => ({
    list: [],
    addingList: (name, surname) => set((state) => ({
        list: [...state.list, {name, surname}]
    }))
}))


