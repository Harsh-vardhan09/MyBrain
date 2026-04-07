import axios from "axios";
import { useEffect, useState } from "react";

const UseContent = () => {
  const [contents, setContent] = useState([]);

  const refresh = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContent(response.data.content);
      });
  };

  useEffect(() => {
    refresh();
    let interval = setInterval(() => {
      refresh();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {contents,refresh};
};

export default UseContent;
