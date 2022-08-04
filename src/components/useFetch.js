
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPedning, setIsPending] = useState(true);
  
  
    useEffect(() => {
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
            setIsPending(false);
          });
          return () => console.log('cleanup');
      }, []);

      return { data, isPedning}
}

export default useFetch;