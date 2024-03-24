import './styling.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { updateCurrentUser } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
// Component name must start with a capital letter


function App() {

	const {curUser} = useContext(AuthContext);
	// console.log(curUser);

	// Here, children is the component we wish to protect from an unsigned user to access i.e., the home page.
	const ProtectedRoute = ({children}) => {
		if(!curUser)
			return <Navigate to = "/login"/>;
		// If the user is not signed in, we redirect the request to the login page instead of the home page.
		return children;	// i.e., return <Home/>
	}

	return (
		<BrowserRouter>
			<Routes>		{/* In React Router version 6, the <Switch> component has been deprecated and replaced with the <Routes> component */}
				<Route exact path="/">
					<Route index element = {
								<ProtectedRoute>
									<Home/> 
								</ProtectedRoute>
								// We display the home page only when the user is signed in
							}
					/>
					<Route exact path="login" element={<Login/>} />
					<Route exact path="register" element={<Register/>} />
				</Route>
			</Routes>
	  	</BrowserRouter>
	);
}

export default App;
