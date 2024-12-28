import React, { useEffect } from 'react'
import './Modal.scss';
import { SingleUser} from '../../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Modal = ({id}) => {

   const { tempUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
      useEffect(()=>{
          dispatch(SingleUser(id));
      },id)
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
      <div class="offcanvas-body">
         <p>{tempUser?.userName}</p>
      </div>
    </div>
  );
}

export default Modal