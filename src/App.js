import './App.css';
import {useState} from 'react';
function App() {

  const[Active,setActive]=useState(true);
  const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const [matrix, setMatrix] = useState(board);

  //color
  // let white='#ffffff';
  // const [bgColor, setBgColor] = useState(white);
  let red='#ff0000';
  let green='#008000';

  const handleChange = (row, col) => {
    const updatedMatrix = [...matrix];
    if(Active){
      updatedMatrix[row][col] = " * ";
      // let red='#ff0000';
      // setBgColor(red);
    }
    else{
      updatedMatrix[row][col] = " 0 ";
      // let green='#008000';
      // setBgColor(green);
    }
    setMatrix(updatedMatrix);
    setActive(!Active);
    // alert(matrix);
    if((matrix[0][0]===matrix[1][1] && matrix[1][1]===matrix[2][2] && matrix[0][0]!==" " && matrix[1][1]!==" " && matrix[2][2]!==" *") || 
    (matrix[0][2]===matrix[1][1] && matrix[1][1]===matrix[2][0] && matrix[0][2]!==" " && matrix[1][1]!==" " && matrix[2][0]!==" ") || 
    (matrix[0][0]===matrix[0][1] && matrix[0][1]===matrix[0][2] && matrix[0][0]!==" " && matrix[0][1]!==" " && matrix[0][2]!==" ") || 
    (matrix[0][0]===matrix[1][0] && matrix[1][0]===matrix[2][0] && matrix[0][0]!==" " && matrix[1][0]!==" " && matrix[2][0]!==" ") || 
    (matrix[0][2]===matrix[1][2] && matrix[1][2]===matrix[2][2] && matrix[0][2]!==" " && matrix[1][2]!==" " && matrix[2][2]!==" ") || 
    (matrix[2][0]===matrix[2][1] && matrix[2][1]===matrix[2][2] && matrix[2][0]!==" " && matrix[2][1]!==" " && matrix[2][2]!==" ") ||
    (matrix[1][0]===matrix[1][1] && matrix[1][1]===matrix[1][2] && matrix[1][0]!==" " && matrix[1][1]!==" " && matrix[1][2]!==" ") || 
    (matrix[0][1]===matrix[1][1] && matrix[1][1]===matrix[2][1] && matrix[0][1]!==" " && matrix[1][1]!==" " && matrix[2][1]!==" ")){
        if(matrix[row][col]===' * '){
          alert("WIN Player 1");
        }
        else{
          alert("WIN Player 2");
        }
        const clearMatrix = matrix.map(row => row.map(() => " ")); 
        setMatrix(clearMatrix);
    }
    else{
      let cnt=0;
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          if(matrix[i][j]!==" "){
            cnt++;
          }
        }
      }
      if(cnt===9){
        alert("Tie No One Win");
        const clearMatrix = matrix.map(row => row.map(() => " ")); 
        setMatrix(clearMatrix);
      }
    }
  };

  return (
    <>
    <div className="App">
    <h1>TIC-TAC-TOE GAME</h1>
      <div>
      <table className="board">
        <tr>
          <td onClick={() => handleChange(0, 0)} >{matrix[0][0]}</td>
          <td onClick={() => handleChange(0, 1)} >{matrix[0][1]}</td>
          <td onClick={() => handleChange(0, 2)} >{matrix[0][2]}</td>
        </tr>
        <tr>
          <td onClick={() => handleChange(1, 0)} >{matrix[1][0]}</td>
          <td onClick={() => handleChange(1, 1)} >{matrix[1][1]}</td>
          <td onClick={() => handleChange(1, 2)} >{matrix[1][2]}</td>
        </tr>
        <tr>
          <td onClick={() => handleChange(2, 0)} >{matrix[2][0]}</td>
          <td onClick={() => handleChange(2, 1)} >{matrix[2][1]}</td>
          <td onClick={() => handleChange(2, 2)} >{matrix[2][2]}</td>
        </tr>
      </table>
      </div>
      <div>
      <button style={{background: Active ? red : green }}>{Active ? ("your turn(*)") : ("next")}</button>
      <button style={{background: Active ? green : red }}>{Active ? ("next") : ("your turn(0)")}</button>
      </div>
    </div>
    </>
  );
}

export default App;
