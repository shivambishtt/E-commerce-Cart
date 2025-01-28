import { toast } from "react-toastify"

export const showToast = () => {
    toast.success("Succesfully added", {
        position: "bottom-right",
        closeOnClick: true,
    })
}