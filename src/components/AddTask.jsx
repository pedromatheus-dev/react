import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        id="title"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a Tarefa"
        value={title}
        onChange={(evt) => {
          setTitle(evt.target.value);
        }}
      />
      <input
        id="description"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a Descrição"
        value={description}
        onChange={(evt) => {
          setDescription(evt.target.value);
        }}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
            setTitle("");
            setDescription("");
            if (!title.trim() || !description.trim()) {
                return alert("Preencha os campos corretamente.")
            }
        props.onAddTask(title, description); 
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
