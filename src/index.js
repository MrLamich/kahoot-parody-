import React from 'react';
import ReactDOM from 'react-dom/client';
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import UserRoom from "./pages/UserRoom";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Quiz from "./pages/Quiz";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="main" element={<MainPage />} />
            <Route path="userRoom" element={<UserRoom />}/>
            <Route path="quiz" element={<Quiz/>}/>
        </Routes>
    </BrowserRouter>,
    <MainPage/>,
    <Quiz />,
    <Registration />

);


