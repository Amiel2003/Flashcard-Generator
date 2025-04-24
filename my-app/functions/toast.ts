import Toast from "typescript-toastify";
import { ToastType } from "typescript-toastify/lib/type/type";

export const showToast = (message: string, type: ToastType) => {
    new Toast({
        position: "bottom-right",
        toastMsg: message,
        autoCloseTime: 2000,
        canClose: true,
        showProgress: true,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        type: type,
        theme: "dark"
    });
};
