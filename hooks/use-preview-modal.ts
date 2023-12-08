import { Product } from "@/types";
import {create} from "zustand";

interface PreviewmodalStore{
    isOpen: boolean,
    data?:Product,
    onOpen: (data: Product) => void,
    onClose: () => void
}

const usePreviewModal = create<PreviewmodalStore>((set)=>({
    isOpen: false,
    onOpen: (data: Product) => set({data: data, isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default usePreviewModal