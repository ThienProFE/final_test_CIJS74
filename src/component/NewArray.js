import React, { useState } from "react";

const NewArray = () => {
  const arrayA1 = [1, 2, "a"];
  const arrayA2 = [1, 3, "b"];
  const arrayA = [...arrayA1, ...arrayA2];
  const [arrayB, setArrayB] = useState([]);

  const handleNewArray = () => {
    for (let i = 0; i < arrayA.length; i++) {
      for (let j = i + 1; j < arrayA.length; j++) {
        if (arrayA[i] === arrayA[j]) {
          setArrayB(
            arrayA.filter((item, index) => {
              return index !== i && index !== j;
            })
          );
        }
      }
    }
  };
  console.log(arrayB);

  return (
    <div>
      <button
        style={{
          backgroundColor: "orange",
          padding: "0.5rem",
          fontWeight: "bold",
        }}
        onClick={handleNewArray}
      >
        Bấm vào đây để nhận mảng mới không bị trùng nhau
      </button>
      <div>{arrayB}</div>
    </div>
  );
};

export default NewArray;
