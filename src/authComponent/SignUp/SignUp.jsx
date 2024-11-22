import React, { useState } from "react";
import { Camera, Plus } from "lucide-react";
import "./SignUp.scss";
import Banner from "../../commonComponents/Banner/Banner";
import WhyChhoseUs from "../../commonComponents/Footer/Footer";
import Footer from "../../commonComponents/Footer/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    linkedin: "",
    twitter: "",
    github: "",
    imagePreview: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
          <div className="col-md-4 mb-4">
            <div className="card reg_left">
              <div className="card-body text-center">
                <div className="position-relative mb-4 d-inline-block">
                  {formData.imagePreview ? (
                    <img
                      src={formData.imagePreview}
                      alt="Employee"
                      className="rounded-circle"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      className="rounded-circle  box_shadow m-1 custome_border d-flex align-items-center justify-content-center"
                      style={{ width: "200px", height: "200px" }}
                    >
                      <Camera size={48} className="text-secondary" />
                    </div>
                  )}
                  <div className="position-absolute bottom-0 end-0">
                    <label className="btn  btn-sm rounded-circle custome_border">
                      <Plus />
                      <i className="bi bi-camera"></i>
                      <input
                        type="file"
                        className="d-none"
                        accept="image/*"
                        onChange={handleImageChange}
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
                      value={formData.linkedin}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* for the Twitter */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left"
                      placeholder="Twitter URL"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* for the Facebook */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control reg_left"
                      placeholder="Facebook URL"
                      name="fb"
                      value={formData.github}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Registration Form */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Employee Registration</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      placeholder="Password"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      placeholder="Confirm Password"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <select
                        className="form-select"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
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
                      className="form-control"
                      rows={"7"}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
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
