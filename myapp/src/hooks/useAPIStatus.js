import { useState } from "react";

const useApiStatus = () => {
  const [status, setStatus] = useState(false);

  const isLoading = status === "loading";
  const isDone = status === "done";

  const isError = status === "error";

  return {
    isError,
    isDone,
    isLoading,
    setStatus,
  };
};
export default useApiStatus;
