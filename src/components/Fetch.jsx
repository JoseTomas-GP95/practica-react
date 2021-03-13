import React, { useState, useEffect } from "react";

const MyFetch = () => {
  // const [myfetch, setMyFetch] = useState("");
  const [myfetch, setMyFetch] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMyFetch(data));
  }, []);

  let guardar = (
    <div>
      {myfetch.map((e) => {
        return <p>{e.name}</p>;
      })}
      <br />
    </div>
  );

  console.log(guardar, "G");

  return <div>{guardar}</div>;
};

export default MyFetch;
