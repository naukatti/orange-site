import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  let { userId } = useParams();

  const [userInfo, setUserInfo] = useState(null);

  // Setting up the hook that contains the axios gets
  const hook = () => {
    console.log("effect happens!");
    axios
      .get(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`)
      .then((response) => {
        setUserInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(hook, []);

  if (userInfo) {
    let date = new Date(userInfo.created * 1000);

    date = date.toLocaleString();
    return (
      <div className="Story">
        <h2>{userInfo.id}</h2>
        <p>Karma: {userInfo.karma}</p>
        <p>Account created: {date}</p>
        <p>Number of sumbmitted interactions: {userInfo.submitted.length}</p>
      </div>
    );
  }
  return <p>Loading info</p>;
};

export default User;
