import React from 'react';
import {useDispatch} from "react-redux";
import {getDate, months, getWeekDay} from "../dateFunctionts";
import {useHttp} from "../Hooks/http.hook";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faMinusCircle, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {useTypedSelector} from "../Hooks/useTypedSelector";

const addTaskIco = <FontAwesomeIcon icon={faPlus} />
const deleteTaskIco = <FontAwesomeIcon icon={faMinusCircle}/>
const BackIco = <FontAwesomeIcon icon={faArrowLeft} />

type TaskItemProps = {
    task: string,
    index: number
}

const TaskItem = ({task, index}: TaskItemProps) => {
    const dispatch = useDispatch();

    const handleAddTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const element: HTMLInputElement = event.target;
        if (!element) return
        dispatch({type: "CHANGE_TODO", payload: {index, task: element.value}})
    }

    const handleDeleteTask = () => {
        dispatch({type: "DELETE_TODO", payload: {index}})
    }

    return (
        <label className="userPage-tasks__item">
            <input
                className="userPage-tasks__item-input"
                id={`task${index}`}
                type="text"
                onChange={handleAddTaskChange}
                value={task}
            />
            <div onClick={handleDeleteTask} className="userPage-tasks__item-delete">
                {deleteTaskIco}
            </div>
        </label>
    )
}

const LoggedUserPage = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();
    const userData = useTypedSelector(state => state.userData)
    const date = getDate();

    const addNewTask = () => {
        dispatch({type: "ADD_NEW_TODO", payload: {task: "New Todo"}})
    }

    const logOut = async () => {
        try {
            const data = await request('/api/saveuser', 'PATCH', {email: userData.email, data: userData.data})
            console.log(data)
        } catch (e) {
            dispatch({type: "SET_USER_LOGIN", payload: false})
            console.log("Error while fetching saving data...")
        }
        dispatch({type: "SET_USER_LOGIN", payload: false})
    }

    return (
        <div className="userPage userPage-outer">
            <div className="userPage-inner container">
                <div className="userPage-logOut" onClick={logOut}>
                    {BackIco}
                </div>
                <div className="userPage-title">
                    Hello {userData.name} {userData.surname}!
                </div>
                <div className="userPage-date">
                    <span className="bolder">{getWeekDay()}</span>,&nbsp;
                    {date.day} {months[date.month + 1]}
                </div>
                <div className="userPage-tasks">
                    {
                        userData.data?.length > 0 ? userData.data.map(
                            (item, index) =>
                                <TaskItem
                                    key={index}
                                    index={index}
                                    task={item.task}
                                />
                        ) :
                            <label className="userPage-tasks__item">
                                <input
                                    placeholder="No Tasks for today!"
                                    type="text"
                                    className="userPage-tasks__item-input"
                                    disabled
                                />
                            </label>

                    }
                </div>
                <div className="userPage-tasks__newTask" onClick={addNewTask}>
                    {addTaskIco}
                </div>
            </div>
        </div>
    );
};

export default LoggedUserPage;