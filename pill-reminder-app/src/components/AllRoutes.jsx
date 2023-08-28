
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import VerifyEmailForm from "../pages/verfiyOTP";
import ReminderForm from "../pages/ReminderFrom";
import Dashboard from "../pages/Dashboard";
function AllRoutes() {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verifyotp" element={<VerifyEmailForm />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/reminder" element={<ReminderForm />}></Route>
        </Routes >
    </>;
}

export default AllRoutes;
