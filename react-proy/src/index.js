import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Routes, Route} from "react-router-dom"

//components
import NavBar from "./components/NavBar";
// import CompanyList from "./components/Company/companyList";
// import CompanyForm from "./components/Company/companyForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <div className="container my-4">
      <Routes>
        {/* <Route exact path="/" element={<CompanyList />} />
        <Route path="/companyForm" element={<CompanyForm />} />
        <Route path="/updateCompany/:id" element={<CompanyForm />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
