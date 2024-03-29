
import './App.css';
import Board from './components/Board';
import {useState} from 'react';
function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],]
  

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [winner, setWinner]= useState(null);
  const [gameOver, setGameOver] = useState(false);
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if(idx === boxIdx){
        return xPlaying === true ? "X": "O";
      }else {
        return value;
      }
    })
    const winner = checkWinner(updatedBoard);
    if (winner) setWinner(winner); 
    setBoard(updatedBoard);
    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    for(let i = 0; i < WIN_CONDITIONS.length; i++){
      const [x, y, z] = WIN_CONDITIONS[i];
      if(board[x] && board[x] === board[y]&& board[y] === board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  return (
    <div className="App">
      <div>Winner is:  {winner}</div>
   <Board board={board} onClick={handleBoxClick}/>
   <button onClick={resetBoard}>Reset</button>
    </div>
  );
}

export default App;
