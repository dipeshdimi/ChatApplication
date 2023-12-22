import { createContext, useEffect, useState } from "react";
import { myAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

// Children're the components wrapped within <AuthContextProvider></AuthContextProvider> i.e., components in which curUser would be available.
export const AuthContextProvider = ({ children }) => {

    const [curUser, setCurUser] = useState({});
        // Initialized with {} since we're storing an object in this state.

    useEffect(() => {
        // onAuthStateChanged gives us user, i.e., the current user (the one that's logged in as of now). If the user returned within the handler is null we assume the user is currently signed-out, otherwise they are signed-in and a User interface is returned.
        // The onAuthStateChanged method also returns an unsubscriber function which allows us to stop listening for events whenever the hook is no longer in use.
        const unsub = onAuthStateChanged(myAuth, (user) => {
            // if(user) {
                setCurUser(user);
                // console.log(user);
                // console.log("danujnda");
                // console.log(user.username);
            // }
            // else{
            //     setCurUser({});
            // }
        });
        
        // The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.
        // Cleanup function runs whenever a component unmounts (removed from DOM) as well as each time the component re-renders . For instance, if a component renders multiple times, the previous effect is cleaned up before executing the next effect.
        // ?For example, if we were using a setInterval() function inside the useEffect hook which runs every second, we would be calling a new setInterval() function without calling the current one. To deal with this, we would need to use clearInterval() function inside this cleanup function.
        // Besides, when we want to cancel a request and say, start another request, the cancelled request would still run anyway before running the new request if we don't cleanup the previous request call.
        return () => {
            unsub();
            // Calling the unsubscriber function returned by onAuthStateChanged function for clean up
        };
    }, []);

    // It means any component written inside <AuthContextProvider></AuthContextProvider> would have access to the state curUser. To make curUser available inside every component, we wrap the App.js or index.js's return inside <AuthContextProvider></AuthContextProvider>.
    return (
        <AuthContext.Provider value={{ curUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// export default AuthContextProvider;

// Why not simply use myAuth?.curUser to get the currently signed-in user? 
// Because it gives null in both cases, when the current user is not signed in as well as when it's unknown. Firebase Authentication automatically stores the user credentials in most browsers and restores them when the page/app reloads. But this requires that it makes a call to the server (to check for example if the account was disabled), which takes time. By the time your code checks currentUser the call to the server hasn't completed yet, and thus currentUser is null. To fix this, you'll want to use a so-called auth state listener to get notified and respond to any changes in authentication state.

// React prints your console.log() statements twice when your App component is wrapped in a StrictMode component in your index.js file. The same happens when using the useEffect hook (e.g., used in AuthContext.js file).