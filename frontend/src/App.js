import 'devextreme/dist/css/dx.light.css';
import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import ForgetPassword from './Pages/ForgetPassword';
import Register from './Pages/Register';
import Transactions from './Pages/Transactions';
import Layout from "./Layout";

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>

                        <Route index element={
                            <Transactions />
                        } />

                        <Route path="/register" element={
                            <Register />
                        } />

                        <Route path="/login" element={
                            <Login />
                        } />

                        <Route path="/resetPassword" element={
                            <ForgetPassword />
                        } />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

