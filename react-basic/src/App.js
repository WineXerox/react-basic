import Transaction from "./Components/Transaction";
import "./App.css"

function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}
  return (
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Transaction/>
      </div>
  );
}

export default App;