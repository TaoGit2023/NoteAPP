import CreateNote from "./CreateNote/CreateNote"
import Note from "./Note/Note"

const Notes = ()=>{
    return (
      <div className="text-center text-white font-bold text-4xl">
        <h1>Notes</h1>
        <div className="flex">
          <Note />
          <CreateNote />
        </div>
      </div>
    );
}
export default Notes