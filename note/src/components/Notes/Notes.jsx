import { useEffect, useState } from "react";
import CreateNote from "./CreateNote/CreateNote"
import Note from "./Note/Note"
import { v4 as uuid } from "uuid";
const Notes = ()=>{
   const [input, setInput] = useState("");
   const [notes, setNotes] = useState([]);
   const [loading,setLoading] = useState(true);
   const handleDeleteButton = (id)=>{
    setNotes(notes.filter((note)=>note.id!==id))
   }
   const handleAddButton = ()=>{
    setNotes((preState)=>[
      ...preState,
      {
        text:input,
        id:uuid(),
      }
    ])
    setInput("");
   }

   const handleInput = (e)=>{
    setInput(e.target.value)
   }

   useEffect(()=>{
    if(!loading){
    localStorage.setItem("Notes",JSON.stringify(notes))
    }
   },[notes,loading])
   useEffect(()=>{
    const fetchNote = JSON.parse(localStorage.getItem("Notes"))
    if(fetchNote.length>0){
    setNotes(fetchNote)
    }
    setLoading(false)
   },[])
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto">
        {notes?.map((item) => {
          return (
            <Note
              key={item.id}
              id={item.id}
              text={item.text}
              deleteButton={handleDeleteButton}
            />
          );
        })}
        <CreateNote
          addButtonClicked={handleAddButton}
          textInput={handleInput}
          input={input}
        />
      </div>
    );
}
export default Notes