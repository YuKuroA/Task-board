import Header from "../../components/header/header"
import TaskBoard from "../../components/taskBoard/taskBoard"
import './userBoard.css'

interface UserBoardProps {
    login: string
}

const UserBoard: React.FC<UserBoardProps> = ({login}) => {
    const userBoard = (
        <div>
            <Header login={login} />
            <TaskBoard />
        </div>
    )

    return userBoard
}

export default UserBoard