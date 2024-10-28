import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import { useEffect, useState } from "react";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Registration from "./components/Registration";

function App() {
  const [role, setRole] = useState('');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
      .then(res => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole('');
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books role={role} />} />
        <Route path="/register" element={<Registration />} /> {/* Fixed this line */}
        <Route path="/login" element={<Login setRoleVar={setRole} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

<link
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-DyZv8FPCx25RPmW4f5VYQaB0v7bHEU9t5oW2Nx/jD1DklV5Dggd0G7R2P6z5iA0h"
  crossorigin="anonymous"
/>

export default App;
