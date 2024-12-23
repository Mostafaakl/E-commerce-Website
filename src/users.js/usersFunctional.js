import { useState } from "react";
export default function UsersFunctional() {
  const [users, setUsers] = useState([
    { name: "hend", age: 20, isAdmin: true },
    { name: "ali", age: 22, isAdmin: true },
    { name: "mohamed", age: 26, isAdmin: false },
  ]);

  const [isAuth, setIsAuth] = useState(true);

  function handleToggle(){
    setIsAuth ( !isAuth)
  }
  return (
    <>
      <ul>
        {isAuth ? (
          users.map((user, index) => {
            if (user.isAdmin) {
              return <li key={index}>{user.name} </li>;
            }
          })
        ) : (
          <h1>Please login first </h1>
        )}
      </ul>
      <button className="btn  btn-success" onClick={() => {
        handleToggle()
      }}>Toggle</button>
    </>
  );
}
