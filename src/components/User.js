import React from "react";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user) && user.pseudo}</h3>
        <img src="./img/kabore 1.jpg" alt="kabore 1" />
        <p>Age : {!isEmpty(user) && user.age} ans</p>
        <p>
          Like :{!isEmpty(user) && user.likes > 1 ? "s" : ""} :{" "}
          {!isEmpty(user) && user.likes}
        </p>
      </div>
    </div>
  );
};

export default User;
