import { useNavigate } from "react-router-dom";
import { Header, TaskBoard } from "../../components";

import "./UserBoard.css";
import { useEffect } from "react";

export const UserBoard = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/auth/sign-in");
    }
  }, [username]);

  return (
    <div className="user-board">
      <Header username={username} />
      <TaskBoard />
    </div>
  );
};
