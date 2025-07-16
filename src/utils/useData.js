import { useState, useEffect } from "react";

export default function useData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const response = await fetch(url, controller.signal);
        if (!response.ok) {
          setError("Error: cannot find the product");
          setData(null);
          return;
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (errMessage) {
        if (errMessage === "AbortError") {
          console.log("Aborted");
          setError("Aborted");
          return;
        }
        setData(null);
        setError(errMessage);
        console.log(errMessage);
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    error,
    isLoading,
  };
}
