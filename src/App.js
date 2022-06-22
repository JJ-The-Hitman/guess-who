import './App.css';
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <Board
        iheight={5}
        iwidth={5}
      />
    </div>
  );
}

export default App;
