import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import "./index.css";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="Y" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
