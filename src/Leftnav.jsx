
import {useState} from "react"
import "./CSS/Leftnav.css"

let LeftNav = ()=>{

const [isActive, setIsActive] = useState("node");

        console.log(isActive);
    return <ul className="list-group col-2">
  <li className={`list-group-item`} onClick = {()=>{
      setIsActive("all")
  }}><b>Zendenta</b></li>
  <li className={`list-group-item ${isActive === "over" ? "Active" : ""}`}onClick = {()=>{
      setIsActive("over")
  }}>Overview</li>
  <li className={`list-group-item ${isActive === "cal" ? "Active" : ""}`}onClick = {()=>{
      setIsActive("cal")
  }}>Calender</li>
  <li className={`list-group-item ${isActive === "pat" ? "Active" : ""}`}onClick = {()=>{
      setIsActive("pat")
  }}>Patient List</li>
  <li className={`list-group-item ${isActive === "mes" ? "Active" : ""}`}onClick = {()=>{
      setIsActive("mes")
  }}>Messages</li>
  <li className={`list-group-item ${isActive === "pay" ? "Active" : ""}`}onClick = {()=>{
      setIsActive("pay")
  }}>Payment Information</li>
  <li className={`list-group-item ${isActive === "set" ? "Active" : ""}`}onClick = {()=>{
      setIsActive("set")
  }}>Settings</li>
</ul>
}



export default LeftNav;