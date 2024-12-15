import React, { useState } from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from 'js-cookie'

function SignIn() {
  const [err, setErr] = useState('');
  const [id,setId] = useState();
  const [password,setPassword] = useState();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const body = {userEmail:id,userPassword:password}
    console.log(body);
    
    try{
      const token = await axios.post(
        `http://localhost:9000/letswork/auth/create/session`,body
      );
    }catch(err){

    }

  }
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-0">
          <div class="modal-body p-0">
            <div className="col-xl-12 w-100 border-0">
              <div className="card rounded text-black border-0">
                <div className="row p-0 m-0 g-0">
                  <div className="border-0 col-lg-6 flex-grow-1 login_form box_shadow">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          Welcome to Let's Work
                        </h4>
                      </div>
                      <form onSubmit={handleSubmit}>
                        {/* for the username and email */}
                        <div
                          className={`form-outline ${
                            err ? "error" : ""
                          } mb-4 d-flex flex-column align-items-start`}
                        >
                          <input
                            type="email"
                            className="form-control rounded-2 m-0 f14"
                            placeholder="Phone number or email address"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                          />
                          <small
                            className={`px-2 f11 ${err ? "d-block" : "d-none"}`}
                          >
                            There is Error
                          </small>
                        </div>

                        {/* for the password */}
                        <div
                          className={`form-outline mb-4 ${
                            err ? "error" : ""
                          } d-flex flex-column align-items-start`}
                        >
                          <input
                            type="password"
                            className="form-control rounded-2 m-0 f14 box_shadow                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "
                            placeholder="Enter Password or Key"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                          <small
                            className={`px-2 f11 ${err ? "d-block" : "d-none"}`}
                          >
                            There is Error
                          </small>
                        </div>

                        <div className="text-center pt-1">
                          <button
                            className={`btn w-100 disabled1 ${id && password ? 'login_btn':''} mb-3`}
                            
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link
                            to={`api/letswork/register/account`}
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="border-0 m-0 col-lg-6 d-flex image_login align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
