import {ChevronRightIcon, TrashIcon} from "lucide-react"
import { useNavigate } from "react-router-dom"

function Tasks(props){
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        navigate(`/task?title=${task.title}&description=${task.description}`)
    }
    // return <p>{props.tasks[0].title}</p>
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 text-white p-2 w-full text-left rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.title}
                    </button>
                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md"><ChevronRightIcon/></button>
                    <button className="bg-slate-400 text-white p-2 rounded-md" onClick={() => props.onDeleteTaskClick(task.id)}><TrashIcon/></button>
                </li>
            )}
        </ul>
    )
}

export default Tasks