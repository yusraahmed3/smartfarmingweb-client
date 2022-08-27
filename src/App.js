import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Request from "./components/Request";
import ActiveRequests from "./components/ActiveRequests";
import ManageAccount from "./components/ManageAccount";
import ReviewedRequests from "./components/ReviewedRequests";
import CardDetail from "./components/CardDetail";
import RequestDetail from "./components/RequestDetail";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<ManageAccount />} />
        <Route path="/active" element={<ActiveRequests />} />
        <Route path="/reviewed" element={<ReviewedRequests />} />
        <Route path="/request" element={<Request />} />
        <Route path="/carddetail" element={<CardDetail />} />
        <Route path="/requestdetail" element={<RequestDetail />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
