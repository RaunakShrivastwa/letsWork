import React, { useEffect, useState } from 'react'
import './Modal.scss';
import { SingleUser } from '../../features/authSlice';
import {createProject} from '../../features/ProjectSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Facebook, Linkedin, Twitter } from 'react-feather';

const Modal = ({ id }) => {

  const [name,SetName] = useState();
  const [desc,SetDesc] = useState();
  const [Sdate,setSdate] = useState();
  const [Edate,SetEdate] = useState();
  const [prise,setPrise] = useState();
  const { tempUser,user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(SingleUser(id));
    }
  }, id);
  console.log("User check",user);
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const body = {
      projectName: name,
      projectDescription: desc,
      startDate: Sdate,
      endDate: Edate,
      price: prise,
      userEmail:tempUser?.userEmail
    };
    dispatch(createProject(body));
    
  }

  return (
    <div
      class="offcanvas offcanvas-end user_table"
      tabindex="-1"
      id="userInfo"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          User Information
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body p-2">
        <div className="wrapper">
          <img src={tempUser?.profile} alt="" />
          <p className="info form-control mb-2 mt-2">
            {tempUser?.userName || "Anonymous"}
          </p>
          <p className="info form-control mb-2">
            {tempUser?.userEmail || "guest@gmail.com"}
          </p>
          <p className="info form-control mb-2">
            {tempUser?.userAddress || "Root"}
          </p>
          <p className="info form-control mb-2">
            {tempUser?.payment || "Pending...."}
          </p>

          <form className="w-100" onSubmit={handleSubmit}>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Project Name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Enter Project Discription"
              value={desc}
              onChange={(e) => SetDesc(e.target.value)}
            />
            <input
              type="date"
              class="form-control"
              placeholder="Enter Start Date"
              value={Sdate}
              onChange={(e) => setSdate(e.target.value)}
            />
            <input
              type="date"
              class="form-control"
              placeholder="Enter End Date"
              value={Edate}
              onChange={(e) => SetEdate(e.target.value)}
            />
            <input
              type="text"
              class="form-control"
              placeholder="Enter Prise"
              value={prise}
              onChange={(e) => setPrise(e.target.value)}
            />
            <button type="submit" class="btn btn-success form-control">
              Submit
            </button>
          </form>

          <div className="social_link form-control">
            <a
              href={"https://www.linkedin.com/in/java-abhijeet/"}
              className="fb"
            >
              <Facebook className="i20" />
            </a>
            <a href={tempUser?.twitter} className="twitter">
              <Twitter className="i20" />
            </a>
            <a href={tempUser?.linkedin} className="linkedin">
              <Linkedin className="i20" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal