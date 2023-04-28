import { useState, useEffect } from "react";

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 5000);
  }, []);

  return isMounted;
};

export default useIsMounted;
