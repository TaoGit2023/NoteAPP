
import './App.css';
import Notes from './components/Notes/Notes';

function App() {
  return (
    <div className=" max-w-[960px] px-4 min-h-screen mx-auto">
      <h1 className='text-white text-4xl my-10'>Hello Notes</h1>
      <Notes />
    </div>
  );
}

export default App;
