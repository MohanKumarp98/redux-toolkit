import React, { useState } from "react";

export const ChangeColor = () => {
  // const intial = [
  //   {
  //     id: 1,
  //     name: "*",
  //     color: "black",
  //   },
  //   {
  //     id: 2,
  //     name: "*",
  //     color: "black",
  //   },
  //   {
  //     id: 3,
  //     name: "*",
  //     color: "black",
  //   },
  //   {
  //     id: 4,
  //     name: "*",
  //     color: "black",
  //   },
  //   {
  //     id: 5,
  //     name: "*",
  //     color: "black",
  //   },
  // ];
  let intial = [1, 2, 3, 4, 5];
  const [data, setData] = useState(intial);
  const [id, setId] = useState(0);

  // const handleClick = (e,id) => {
  //   console.log(e.target.innerHTML);
  //   let x = [...data];
  //   let y = x.map((val) => {
  //     if (val.id === id) {
  //       val.color = "red";
  //       return val;
  //     } else if (val.id < id) {
  //       val.color = "blue";
  //       return val;
  //     } else {
  //       val.color = "black";
  //       return val;
  //     }
  //   });
  //   setData(y);
  // };
  return (
    <>
      {/* {data?.map((val) => {
        return (
          <div key={val.id}>
            <h1
              style={{ color: val.color }}
              onClick={(e) => {
                handleClick(e,val.id);
              }}
            >
              {val.name}
            </h1>
          </div>
        );
      })} */}
      {data?.map((val) => {
        return (
          <div key={val}>
            <h1
              className={id === val ? "red" : id > val ? "blue" : "black"}
              onClick={() => {
                setId(val);
              }}
            >
              *
            </h1>
          </div>
        );
      })}
    </>
  );
};
