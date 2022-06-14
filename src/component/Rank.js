import React, { useState } from "react";

const Rank = () => {
  const [listRank, setListRank] = useState([
    {
      name: "Arsenal",
      points: 99,
      GD: 45,
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39,
    },
    {
      name: "Manchester United",
      points: 60,
      GD: 29,
    },
    {
      name: "Liverpool",
      points: 88,
      GD: 39,
    },
    {
      name: "Manchester City",
      points: 99,
      GD: 45,
    },
  ]);
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);

  const handleRank = () => {
    for (let i = 0; i < listRank.length; i++) {
      for (let j = i + 1; j < listRank.length; j++) {
        if (listRank[i].name === listRank[j].name) {
          setError("Tên đội bóng bị trùng nhau, hãy kiểm tra lại thông tin");
        }
        if (listRank[i].points === listRank[j].points) {
          if (listRank[i].GD === listRank[j].GD) {
            setListRank(
              listRank.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                return 0;
              })
            );
            setCheck(true);
          } else {
            setListRank(
              listRank.sort((a, b) => {
                return b.GD - a.GD;
              })
            );
            setCheck(true);
          }
        } else {
          setListRank(
            listRank.sort((a, b) => {
              return b.points - a.points;
            })
          );
          setCheck(true);
        }
        break;
      }
      break;
    }
    console.log(listRank);
  };

  return (
    <>
      <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>
      <button
        style={{
          backgroundColor: "tomato",
          padding: "0.5rem",
          fontWeight: "bold",
        }}
        onClick={handleRank}
      >
        Bấm vào đây để hiển thị bảng xếp hạng
      </button>
      <div>
        {check
          ? listRank.map((item, index) => (
              <div key={index}>
                <span>
                  {index + 1} - {item.name} - {item.points} - {item.GD}{" "}
                </span>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Rank;
