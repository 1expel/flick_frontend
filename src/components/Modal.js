import React from 'react';
import FocusTrap from 'focus-trap-react';
import ReactDOM from 'react-dom';
import {Input, ErrorText} from '../globalStyles';
import {InputGroup} from '../components';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const formSchema = Yup.object().shape({
    newUsername: Yup.string()
        .required("Required")
        .min(3, "Must be minimum 3 characters.")
         .max(25, "Must be maximum 25 characters."),
});

export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit
}) => {

  // Create form submission handler
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  });

  console.log(watch("newUsername"), 'newUsername');

  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup>
                <label htmlFor="newUsername">New Username</label>
                <Input 
                  type="text"
                  placeholder="Enter new username"
                  id="newUsername"
                  {...register("newUsername")}
                />
              </InputGroup>
              <ErrorText>{errors.newUsername?.message}</ErrorText>
              <br></br>
              <div className="form-group">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;