const Note = () => {
  return (
    <div className="rounded-xl shadow-black shadow-2xl border text-xl">
      <h2>note</h2>
      <div className="w-90 h-90">hello world</div>
      <div>
        <button className="p-3 bg-yellow">Delete</button>
      </div>
    </div>
  );
};
export default Note;
