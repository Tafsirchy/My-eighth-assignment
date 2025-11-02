import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../AppsData.json")
      .then((res) => setApps(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, errors };
};

export default useApps;
