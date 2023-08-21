import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./FormComponent.css"

const FormComponent = (props)=> {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormvalid] = useState(false)

    const inputTitle = (event)=> {
        setTitle(event.target.value)
    }
    const inputAmount = (event)=> {
        setAmount(event.target.value)
    }
    const seveItem = (event)=> {
        event.preventDefault()//Stop Refersh
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length > 0 && amount !== 0
        setFormvalid(checkData)
    },[title,amount])
    
    return(
        <div>
            <form onSubmit={seveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button  type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent