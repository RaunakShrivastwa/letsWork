import React, { useState } from "react";
import { Camera, Plus } from "lucide-react";
import "./SignUp.scss";
import Banner from "../../commonComponents/Banner/Banner";
import WhyChhoseUs from "../../commonComponents/Footer/Footer";
import Footer from "../../commonComponents/Footer/Footer";

const SignUp = () => {
  return (
    <div className="our-SignUp vh-100 overflow-y-auto register_container">
      {/* Main Banner */}

      <Banner
        image={"https://wallpapercave.com/wp/wp14232509.jpg"}
        title={"Creat Your Free Account!!!!"}
        lead={"Empowering Your Digital Journey with Cutting-Edge Solutions"}
      />

      {/* Main Content */}
      <div className="container mt-5 mb-4">
        <div className="row">
          {/* Left Section - Image and Social Media */}
          <div className="col-md-4 mb-4 p-2">
            <div className="card reg_left custome_radius box_shadow">
              <div className="card-body text-center">
                <div className="position-relative mb-4 d-inline-block">
                 
                    <img
                      src={'jjjj'}
                      alt="Employee"
                      className="rounded-circle"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  
                    <div
                      className="rounded-circle  box_shadow m-1 custome_border d-flex align-items-center justify-content-center"
                      style={{ width: "200px", height: "200px" }}
                    >
                      <Camera size={48} className="text-secondary" />
                    </div>
                  
                  <div className="position-absolute bottom-0 end-0">
                    <label className="btn  btn-sm rounded-circle custome_border">
                      <Plus />
                      <i className="bi bi-camera"></i>
                      <input
                        type="file"
                        className="d-none"
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>

                <div className="social-links mt-4 reg_lef">
                  {/* for the linkedin */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control box_shadow reg_left custome_border"
                      placeholder="LinkedIn URL"
                      name="linkedin"
                      
                    />
                  </div>

                  {/* for the Twitter */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left"
                      placeholder="Twitter URL"
                      name="twitter"
                     
                    />
                  </div>

                  {/* for the Facebook */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left"
                      placeholder="Facebook URL"
                      name="fb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <div className="col-md-8">
            <div className="card bg-transparent border-0 p-2">
              <div className="card-body reg_right custome_radius box_shadow">
                <h3 className="card-title mb-4">Employee Registration</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      placeholder="Password"
                      className="form-control"
                      name="phone"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      placeholder="Confirm Password"
                      className="form-control"
                      name="phone"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-select"
                        name="department"
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      placeholder="Address..."
                      className="form-control area"
                      rows={"7"}
                      name="phone"
                      required
                    />
                  </div>

                  <div className="text-end mt-4">
                    <button type="submit" className="btn btn-submit">
                      Register Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
