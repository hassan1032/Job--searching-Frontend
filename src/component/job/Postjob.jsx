// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import { Context } from "../../main";

// const PostJob = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     location: "",
//     company: "",
//     country: "",
//     city: "",
//     salaryfrom: "",
//     description: "",
//     catagerory: "",
//     fixedsalary: "",
//     salaryto:""
//   });

//   console.log("kjhgf", formData);

//   const onchangeData = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const { isAuthorized, user } = useContext(Context);

//   const handleJobPost = async (e) => {
//     e.preventDefault();
//     // if (salaryType === "Fixed Salary") {
//     //   setSalaryFrom("");
//     //   setSalaryFrom("");
//     // } else if (salaryType === "Ranged Salary") {
//     //   setFixedSalary("");
//     // } else {
//     //   setSalaryFrom("");
//     //   setSalaryTo("");
//     //   setFixedSalary("");
//     // }
//     await axios
//       .post("http://localhost:5000/api/v1/job/post", {
//         ...formData,
//         headers: {
//           "Content-Type": "application/json",
//         },

//       })
      

//       .then((res) => {
//         toast.success(res.data.message);
//         console.log("res>>", res.data.message);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//   };

//   const navigateTo = useNavigate();
//   if (!isAuthorized || (user && user.role !== "Employer")) {
//     navigateTo("/");
//   }

//   return (
//     <>
//       <div className="job_post page">
//         <div className="container">
//           <h3>POST NEW JOB</h3>
//           <form onSubmit={handleJobPost}>
//             <div className="wrapper">
//               <input
//                   type="text"
//                   name="title"
//                   value={formData?.title}
//                   onChange={onchangeData}
//                   placeholder="title"
//               />
//               <select
                
//                 name="catagerory"
//                 onChange={onchangeData}
//               >
//                 <option value="">Select category</option>
//                 <option value="Graphics & Design">Graphics & Design</option>
//                 <option value="Mobile App Development">
//                   Mobile App Development
//                 </option>
//                 <option value="Frontend Web Development">
//                   Frontend Web Development
//                 </option>
//                 <option value="MERN Stack Development">
//                   MERN STACK Development
//                 </option>
//                 <option value="Account & Finance">Account & Finance</option>
//                 <option value="Artificial Intelligence">
//                   Artificial Intelligence
//                 </option>
//                 <option value="Video Animation">Video Animation</option>
//                 <option value="MEAN Stack Development">
//                   MEAN STACK Development
//                 </option>
//                 <option value="MEVN Stack Development">
//                   MEVN STACK Development
//                 </option>
//                 <option value="Data Entry Operator">Data Entry Operator</option>
//               </select>
//             </div>
//             <div className="wrapper">
//               <input
//                 type="text"
//                 name="country"
//                 value={formData?.country}
//                 onChange={onchangeData}
//                 placeholder="Country"
//               />
//               <input
//                 type="text"
//                 placeholder="city"
//                 name="city"
//                 value={formData?.city}
//                 onChange={onchangeData}
//               />
//             </div>
//             <input
//               type="text"
//               name="location"
//               placeholder="location"
//               value={formData?.location}
//               onChange={onchangeData}
//             />
//             <input
//               type="text"
//               name="company"
//               placeholder="company"
//               value={formData?.company}
//               onChange={onchangeData}
//             />
//             <input
//               type="text"
//               name="salaryfrom"
//               placeholder="salaryfrom"
//               value={formData?.salaryfrom}
//               onChange={onchangeData}
//             />
//             <input
//               type="text"
//               name="fixedsalary"
//               placeholder="fixedsalary"
//               value={formData?.fixedsalary}
//               onChange={onchangeData}
//             />
//             <input
//               type="text"
//               name="salaryto"
//               placeholder="salaryto"
//               value={formData?.salaryto}
//               onChange={onchangeData}
//             />
//             <div className="salary_wrapper">
//               {/* <select
//                 // value={}
//                 // onChange={}
//               >
//                 <option value="default">Select Salary Type</option>
//                 <option value="Fixed Salary">Fixed Salary</option>
//                 <option value="Ranged Salary">Ranged Salary</option>
//               </select> */}
//               {/* <div>
//                 {salaryType === "default" ? (
//                   <p>Please provide Salary Type *</p>
//                 ) : salaryType === "Fixed Salary" ? (
//                   <input
//                     type="number"
//                     name="fixedsalary"
//                     value={formData?.fixedsalary}
//                     onChange={onchangeData}
//                   />
//                 ) : (
//                   <div className="ranged_salary">
//                     <input
//                       type="number"
//                       name="salaryfrom"
//                       value={formData?.salaryfrom}
//                       onChange={onchangeData}
//                     />
//                     <input
//                       type="text"
//                       name="salaryto"
//                       value={formData?.salaryto}
//                       onChange={onchangeData}
//                     />
//                   </div>
//                 )}
//               </div> */}
//             </div>
//             <textarea
//               rows="10"
//               name="description"
//               value={formData?.description}
//               onChange={onchangeData}
//               placeholder="Job Description"
//             />
//             <button type="submit">Create Job</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostJob;



import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";
const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");
  const [company, setCompany] = useState("");

  const { isAuthorized, user } = useContext(Context);

  const handleJobPost = async (e) => {
    e.preventDefault();
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        "https://job-searching-backend.onrender.com/api/v1/job/post",
        fixedSalary.length >= 4
          ? {
              title,
              description,
              category,
              country,
              city,
              location,
              fixedSalary,
              company
            }
          : {
              title,
              description,
              category,
              country,
              city,
              location,
              salaryFrom,
              salaryTo,
              company
            },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  if (!isAuthorized || (user && user.role !== "Employer")) {
    navigateTo("/");
  }

  return (
    <>
      <div className="job_post page">
        <div className="container">
          <h3>POST NEW JOB</h3>
          <form onSubmit={handleJobPost}>
            <div className="wrapper">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Frontend Web Development">
                  Frontend Web Development
                </option>
                <option value="MERN Stack Development">
                  MERN STACK Development
                </option>
                <option value="Account & Finance">Account & Finance</option>
                <option value="Artificial Intelligence">
                  Artificial Intelligence
                </option>
                <option value="Video Animation">Video Animation</option>
                <option value="MEAN Stack Development">
                  MEAN STACK Development
                </option>
                <option value="MEVN Stack Development">
                  MEVN STACK Development
                </option>
                <option value="Data Entry Operator">Data Entry Operator</option>
              </select>
            </div>
            <div className="wrapper">
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
                 <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter Company Name"
              />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />
            <div className="salary_wrapper">
              <select
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
              >
                <option value="default">Select Salary Type</option>
                <option value="Fixed Salary">Fixed Salary</option>
                <option value="Ranged Salary">Ranged Salary</option>
              </select>
              <div>
                {salaryType === "default" ? (
                  <p>Please provide Salary Type *</p>
                ) : salaryType === "Fixed Salary" ? (
                  <input
                    type="number"
                    placeholder="Enter Fixed Salary"
                    value={fixedSalary}
                    onChange={(e) => setFixedSalary(e.target.value)}
                  />
                ) : (
                  <div className="ranged_salary">
                    <input
                      type="number"
                      placeholder="Salary From"
                      value={salaryFrom}
                      onChange={(e) => setSalaryFrom(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Salary To"
                      value={salaryTo}
                      onChange={(e) => setSalaryTo(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
            <textarea
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Job Description"
            />
            <button type="submit">Create Job</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
