import Header from "../../components/Header/Header";
import TaskBoard from "../../components/TaskBoard/TaskBoard";
import "./UserBoard.css";

function getUsers() {
  // TODO: Add fetching data about users
  return [];
}

interface UserBoardProps {
  login: string;
}

const UserBoard: React.FC<UserBoardProps> = ({ login }) => {
  const users = getUsers();
  return (
    <div>
      <Header login={login} />
      <TaskBoard />
    </div>
  );
};

export default UserBoard;
