import React,{useState,useEffect} from 'react'

function Custom() {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
            console.log(item)
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}

export default Custom