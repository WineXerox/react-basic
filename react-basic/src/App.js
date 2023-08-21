import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./App.css"
import { useState,useEffect } from 'react'
import DataContext from "./data/DataContext";
import ReportComponent from "./Components/ReportComponent";
// import { element } from "prop-types";

function App() {
  const design = {color:'red',textAlign:'center',fontSize:'1.5rem'}
  //Props Array Data 
  const initState = [
      {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
      {id:2,title:"เงินเดือน",amount:12000},
      {id:3,title:"ค่าเดินทาง",amount:-500},
      {id:4,title:"ขายของออนไลน์",amount:2000}
  ]
  const [items,setItems] = useState(initState)
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
      setReportIncome(income)
      setReporExpense(expense)
  },[items,reportIncome,reportExpense])
  return (
      <DataContext.Provider value={
        {
          income : reportIncome,
          expense: reportExpense
        }
      }>
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
      </DataContext.Provider>
  );
}

export default App;
