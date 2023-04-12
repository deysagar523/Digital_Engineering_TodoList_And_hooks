import React, { useState, useEffect } from "react";

const Q1 = () => {
  const names = [
    "Sagar",
    "Ayan",
    "Sayan",
    "Sayanti",
    "Samir",
    "Sandhya",
    "Subho",
    "Anamika",
    "Anwesha",
  ];
  const [searchInput, setSearchInput] = useState("");
  const [filArray, setFilArray] = useState([]);
  const searchNamesHandler = (searchValue) => {
    
    setSearchInput(searchValue);
  };

  useEffect(() => {
    if (searchInput !== "") {
      console.log(searchInput);
      const filteredData = names.filter((name) => {
        return name.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setFilArray(filteredData);
    }
  }, [searchInput]);

  return (
    <>
      <input
        placeholder="Search..."
        onChange={(e) => searchNamesHandler(e.target.value)}
      />
      {searchInput.length >= 1 ? (
        <>
          <ul>
            {filArray.map((name) => {
              return <li>{name}</li>;
            })}
          </ul>
        </>
      ) : (
        <ul>
          {names.map((name) => {
            return <li>{name}</li>;
          })}
        </ul>
      )}
    </>
  );
};
export default Q1;
