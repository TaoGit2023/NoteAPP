const Note = ({id, text, deleteButton}) => {
  return (
    <div className="rounded-xl text-white shadow-black shadow-2xl min-h-[140px] border-2 text-xl backdrop-opacity-10 p-4">
      <div className="text-sm  min-h-[140px]">{text}</div>
      <div>
        <button className="p-3 bg-yellow" onClick={() => deleteButton(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Note;
