import Toast from "typescript-toastify";
export const showToast = (message: string, type: string) => {
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
