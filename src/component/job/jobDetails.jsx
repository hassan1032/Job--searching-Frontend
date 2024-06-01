import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  function formatDateWithAMPM(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();

    const amPM = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; 

    const formattedDate = `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year} ${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}: ${amPM}`;
    return formattedDate;
  }

  useEffect(() => {
    axios
      .get(`https://job-searching-backend-1.onrender.com/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.jobs);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="jobDetail page">
      <div className="container">
        <h3>Job Details</h3>
        <div className="banner">
          <p>
            Title: <span> {job?.title }</span>
          </p>
          <p>
            Category: <span>{job?.category}</span>
          </p>
          <p>
            Country: <span>{job?.country}</span>
          </p>
          <p>
            City: <span>{job?.city}</span>
          </p>
          <p>
            Location: <span>{job?.location}</span>
          </p>
          <p>
            Description: <span>{job?.description}</span>
          </p>
          <p>
            Comapany: <span>{job?.company}</span>
          </p>
          <p>
            Job Posted On: <span>{formatDateWithAMPM(job?.jobPostedOn)}</span>
          </p>
          <p>
            Salary:{" "}
            {job?.fixedSalary ? (
              <span>{job?.fixedSalary}</span>
            ) : (
              <span>
                {job?.salaryTo} - {job?.salaryFrom}
              </span>
            )}
          </p>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job?._id}`}>Apply Now</Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
