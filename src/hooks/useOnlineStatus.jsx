import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(false);
  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });
  return {
    isOnline,
  };
}

export default useOnlineStatus;
