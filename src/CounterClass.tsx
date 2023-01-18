import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  //componentDidMount
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, []);

  //componentDidUpdate
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, [count, count1]);

  //componentWillUnmount
  // useEffect(() => {
  //   console.log("The useEffect ran");
  //   return () => {
  //     console.log("The return is being ran");
  //   };
  // }, []);

  // Call everytime
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // });

  useEffect(() => {
    console.log(`The useEffect ran ${count}`);
    return () => {
      console.log(`We are in the cleanup - the count is ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment the counter</button>
      <p>Current count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>
        Increment the counter
      </button>
    </div>
  );
};
