import React, { useContext } from 'react'
import { myAuth} from "../firebase";     // From the firebase.js file
import { signOut } from "firebase/auth";
import { AuthContext } from '../context/AuthContext';
import { Link } from "react-router-dom";
import logout from "../pics/logout.png";

// const logout = async () => {
//     console.log(myAuth?.currentUser);
//     try{
//         const res = await signOut(myAuth);
//     }catch(err){
//         // setErr(true);
//         console.log(err);
//     }
// };

const Nav = () => {

    const {curUser} = useContext(AuthContext);
    // console.log("nav");
    // console.log(curUser);

    return (
        <div id='nav'>
            {/* <span>GALLAN KARIYAN</span> */}
            <span>
                <img src={curUser.photoURL} alt=""/>
                <span>{curUser.username}</span>     {/* null ???? */}
            </span>
            <button onClick = {() => signOut(myAuth)}> 
                <Link id='logoutLink' to="/login">Logout</Link> 
                <img src={logout} alt=""/>
            </button>
        </div>
    );
}

export default Nav;