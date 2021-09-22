import { Redirect } from "react-router"

let Home = ()=>{
    return <div>


        <h1>Home</h1>
        {<Redirect to = "/calender"></Redirect>}
    </div>
}