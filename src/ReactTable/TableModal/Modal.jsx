import React from 'react'
import './Modal.scss';

const Modal = () => {
  return (
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="userInfo"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Offcanvas right
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  );
}

export default Modal