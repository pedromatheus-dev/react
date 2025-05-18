function AddTask(props){
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <input id="title" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite a Tarefa" />
        <input id="description" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" type="text" placeholder="Digite a Descrição" />
        <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium" onClick={() => props.onAddTask(document.getElementById("title").value, document.getElementById("description").value)}>Adicionar</button>
    </div>
    )
}

export default AddTask