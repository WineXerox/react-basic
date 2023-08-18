import Item from "./Item";
import "./Transaction.css"

const Transaction = (props)=> {
    const {items} = props
    return (
        <ul className="item-list">            
            {items.map((element)=>{
                return <Item {...element} key={element.id}/>
                // return <Item title={element.title} amount={element.amount} key={uuidv4()}/>
            })}
            {/* <Item title={data[0].title} amount={data[0].amount}/>
            <Item title={data[1].title} amount={data[1].amount}/>
            <Item title={data[2].title} amount={data[2].amount}/>
            <Item title={data[3].title} amount={data[3].amount}/>
            <Item title={data[4].title} amount={data[4].amount}/> */}
        </ul>
        //Props
        // <ul className="item-list">
        //     <Item title="ค่ารักษาพยาบาล" amount="2000"/>
        //     <Item title="เงินเดือน" amount="50000"/>
        //     <Item title="ค่าเดินทาง" amount="500"/>
        //     <Item title="ค่าเช่าห้อง" amount="4000"/>
        // </ul>
    );
}

export default Transaction