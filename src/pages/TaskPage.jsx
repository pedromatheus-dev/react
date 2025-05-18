import { useNavigate } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import {ChevronLeftIcon} from "lucide-react"
function TaskPage(){
    const navigate = useNavigate()
    
    function onBackHistory(){
        navigate("/")
    }
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    return (
        <div className="space-y-4 h-screen w-screen bg-slate-500 p-6 flex justify-start items-center flex-col">
            <div className="flex w-[500px] gap-8 justify-center">
                <button onClick={onBackHistory} className="bg-slate-400 text-white p-2 rounded-md shadow"><ChevronLeftIcon /></button>
                <h1 className="text-3xl text-slate-100 font-bold self-center">Detalhes da Tarefa</h1>
            </div>
            <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col w-[500px]">
                <h1 className="text-3xl text-center font-bold text-slate-400 px-2 py-1 rounded-md text-shadow">{title}</h1>
                <p className="text-2xl text-slate-400 text-center px-2 py-1 rounded-md text-shadow">{description}</p>
            </div>
        </div>
    )
}

export default TaskPage