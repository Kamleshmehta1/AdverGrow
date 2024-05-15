import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL } from '../utils/url';

function useFetchData() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(URL);
      setData(res?.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, isLoading };
}

export default useFetchData;
