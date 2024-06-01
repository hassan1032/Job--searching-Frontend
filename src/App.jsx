import React, { useEffect, useContext } from "react";
import "./App.css";
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
import JobDetail from "./component/job/jobDetails";

import axios from "axios";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://job-searching-backend-1.onrender.com/api/v1/user/getuser",
          {
            withCredentials: true,
          }
        );
        setUser(res.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/post" element={<PostJobs />} />
        <Route path="/jobs/me" element={<Myjobs />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/Application/:id" element={<Application />} />
        <Route path="/Application/me" element={<MyApplication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
