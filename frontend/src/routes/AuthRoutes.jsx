import React from "react";
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/Login'

function AuthRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}
export default AuthRoutes;