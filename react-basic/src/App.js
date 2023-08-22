import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./App.css"
import { useState,useEffect } from 'react'
import DataContext from "./data/DataContext";
import ReportComponent from "./Components/ReportComponent";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import { element } from "prop-types";

function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}
  //Props Array Data 
  // const initData = [
  //     {id:1,title:"ค่าเช่าบ้าน",amount:-3000},
  //     {id:2,title:"เงินเดือน",amount:50000},
  //     // {id:3,title:"ค่าเดินทาง",amount:-500},
  //     // {id:4,title:"ขายของออนไลน์",amount:2000}
  // ]
  const [items,setItems] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReporExpense] = useState(0)
  const onAddNewItem = (newItem)=> {
    setItems((prevItem) => {
        return [newItem, ...prevItem]
    })
  }
  useEffect(()=>{
      const amounts = items.map(items => items.amount)
      const income = amounts.filter(element => element > 0).reduce((total,element)=>total+=element,0)
      const expense = (amounts.filter(element => element < 0).reduce((total,element)=>total+=element,0))*-1
      setReportIncome(income.toFixed(2))
      setReporExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])
  return (
      <DataContext.Provider value={{income : reportIncome,expense: reportExpense}}>
        <div className="container">
          <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
          <Router>
            <div>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/" element = {<ReportComponent/>}></Route>
                <Route path="/insert" element = {<> <FormComponent onAddItem={onAddNewItem}/><Transaction items = {items}/> </> }></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </DataContext.Provider>
  );
}

export default App;

  //Reducer State
  // const [showReport,setShowReport] = useState(false)
  // const reducer = (state,action)=> {
  //       switch(action.type){
  //         case "SHOW" :
  //           return setShowReport(true)
  //         case "HIDE" :
  //           return setShowReport(false)
  //       }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)        
  // return(
  //   <div align="center">
  //       <h1>{result}</h1>
  //       <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
  //       <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
  //   </div>
  // );
