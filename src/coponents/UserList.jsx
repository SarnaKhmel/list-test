import React from "react";
import "./UserList.css";
// import { Image, Name, Age, Online } from "./UserList.styled";
import { FcDislike, FcLike } from "react-icons/fc";

const UserList = ({ people }) => {
  return (
    <div>
      <ul className="list">
        {people.map((user) => (
          <li className="item">
            <img src={user.avatar} alt={user.name} />
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>
              {user.online === true ? <FcLike size={50} /> : <FcDislike />}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
