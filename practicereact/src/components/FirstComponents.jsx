import React, { useEffect, useState } from "react";

function FirstComponents() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [total, setTotal] = useState(0);
  const handleData = () => {
    setAdd((pre) => pre + 1);
    setSub((pre) => pre + 1);
    console.log(add+" "+sub);
  };
  const totalValue = () => {
    setTotal(add + sub);
  };
  useEffect(()=>{
totalValue();
  },[add,sub])
  return (
    <div>
      <p>{total}</p>
      <button onClick={handleData}>click</button>
    </div>
  );
}

export default FirstComponents;
