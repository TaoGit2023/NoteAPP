const CreateNote = ({ addButtonClicked, textInput, input }) => {
  return (
    <div className="rounded-xl text-white shadow-black shadow-2xl min-h-[140px] border-2 text-xl backdrop-opacity-10 p-4">
      <textarea
        cols="25"
        rows="5"
        className="bg-transparent border-0 resize-none mx-auto outline-0"
        value={input}
        placeholder="Type..."
        onChange={textInput}></textarea>
      <div>
        <button className="text-white" onClick={addButtonClicked}>
          ADD
        </button>
      </div>
    </div>
  );
};
export default CreateNote;
