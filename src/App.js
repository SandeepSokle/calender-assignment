import Calender from "./Calender";
import LeftNav from "./Leftnav";
import "./CSS/App.css"

let App = ()=>{
    return <div className = "app col-12 p-3">
        <LeftNav/>
        <Calender/>
    </div>
}

export default App;