import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import yourapp from "./App_";
import { AuthProvider } from "./auth/auth";

function App() {
    return (
        <AuthProvider>
            <div className='app'>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<SignUp />} />
                        <Route exact path='/app' element={<yourapp />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

export default App;
