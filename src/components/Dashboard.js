import { Navigate } from "react-router-dom";
import Navtop from '../components/common/Navtop';
import Maincontain from '../components/common/Maincontain';
function Dashboard(){
    const loggedInUser = localStorage.getItem("authenticated");
    if(!loggedInUser){
        return <Navigate replace to="/" />;
    }else{
        return(
            <div>
                <Navtop/>
                <div class="main-container sidebar-closed sbar-open" id="container">
                    <div class="overlay"></div>
                    <div class="cs-overlay"></div>
                    <div class="search-overlay"></div>
                    <Maincontain />
                </div>
            </div>   
        )
    }
}
export default Dashboard;