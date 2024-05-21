import React, { useEffect, useContext } from "react";
import  "./App.css";
import { Context } from "./main";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import PostJobs from "./component/job/Postjob";
import Myjobs from "./component/job/Myjobs";
import Jobs from "./component/job/jobs";
import MyApplication from "./component/Application/MyApplication";
import Application from "./component/Application/Application";
import NotFound from "./component/NotFound/NotFound";
import JobDetail from './component/job/jobDetails'

import axios from "axios";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/post" element={<PostJobs />} />
          <Route path="/jobs/me" element={<Myjobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/Application/:id" element={<Application />} />
          <Route path="/Application/me" element={<MyApplication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster/>
      </Router>
    </>
  );
};

export default App;
