import React, { useEffect, useState } from 'react';

const ApiCall = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const request = await fetch('https://mock.shop/api?query={collection(id:%20%22gid://shopify/Collection/429512622102%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}');
      const response = await request.json();
      setData(response);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiCall;
