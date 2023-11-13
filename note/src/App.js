
import './App.css';
import Notes from './components/Notes/Notes';
import bg from './components/Notes/note_bg.jpeg'

function App() {
  return (
    <div style = {{backgroundImage:`url(${bg})`}} className="bg-cover bg-center h-screen p-20">
      <Notes />
    </div>
  );
}

export default App;
