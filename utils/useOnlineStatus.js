import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    const checkOnlineStatus = () => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    }

    useEffect(checkOnlineStatus, []);   // add event listener just ONCE

    return onlineStatus;
}

export default useOnlineStatus;