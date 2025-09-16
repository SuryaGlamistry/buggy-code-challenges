import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => setCount(count + 1), 1000);
  }, []);

  return <h1>{count}</h1>;
}