import { onAuthStateChanged } from "firebase/auth";
import CitiesList from "./Components/Cities/CitiesList";
// import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import Login from "./Components/Users/Login"
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import { View } from "react-native-web";
// import Cities from "./Components/Cities/Cities";
// import GuessMyNumber from "./Components/GuessMyNumber";

export default function App() {
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user));
        return () => {
            unsub();
        };
    }, []);

    const [user, setUser] = useState(undefined);

    return (
        user ? < CitiesList / > : 
        <View>
        < Register / >
        <Login / >
        </View>
      
        //<Cities />
       
    );
}