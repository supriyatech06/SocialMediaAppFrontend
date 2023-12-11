import {Routes,Route} from "react-router-dom"

import HomePage from "../Pages/Homepage"
import Login from "../Pages/LoginPage"
import Signuppage from "../Pages/SignupPage"
import PostPage from "../Pages/PostPage"


export default function Allroutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signuppage/>}/>
                <Route path="post" element={<PostPage/>}/>
            </Routes>
        </div>
    )
}