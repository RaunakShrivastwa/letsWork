import React, { useState } from "react";
import "./SignIn.scss";

function SignIn() {

  return (
    <div>
      <div
        class="modal fade border-0"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog border-0">
          <div class="modal-content border-0">
            <div className="modal-body border-0 p-0 bg-transparent d-flex justify-content-center">
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
                            We are The Lotus Team
                          </h4>
                        </div>
                        <form>
                          <p>Please login to your account</p>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              className="form-control rounded-2"
                              placeholder="Phone number or email address"
                            />
                            <small>There is Error</small>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              placeholder="Enter Your Password or key"
                              className="form-control"
                            />
                            <small>There is Error</small>
                          </div>
                          <div className="text-center pt-1">
                            <button
                              className="btn w-100 btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="button"
                            >
                              Log in
                            </button>
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-center">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              Create new
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="border-0 m-0 col-lg-6 d-flex image_login align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">
                          We are more than just a company
                        </h4>
                        <p className="small mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
    </div>
  );
}

export default SignIn;
