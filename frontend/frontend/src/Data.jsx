import React, { useState, useEffect } from 'react';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
        fetch('http://localhost:5000/products')
        .then((res)=> res.json())
        .then((item)=>setData(item))
    

  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <h1>Data From Server</h1>
      {data.map((val, index) => (
        <h1 key={index}>{val.name}</h1>
      ))}
    </div>
  );
};

export default Data;
