import React, { useState, useEffect } from "react";
const Q3 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const fetchUserHandler = async () => {
    setIsLoading(true);
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const selectedData = users.map((user) => {
      const { name } = user;

      return { name };
    });
    setUsers(selectedData);

    setIsLoading(false);
  };

  
  return (
    <>
      <button onClick={fetchUserHandler}>Fetch User</button>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <>
          <ul>
            {users.map((user) => {
              return <li>{user.name}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
};
export default Q3;
