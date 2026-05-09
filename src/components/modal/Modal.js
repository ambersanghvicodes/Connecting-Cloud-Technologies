import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled.div`
  width: 50%;
  height: 80%;
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  transform: translate(-50%, -50%); //  ----.
  border-radius: 12px;
  overflow: scroll;
  overflow-x: hidden;
`;

const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;
const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" },
};

const Modal = ({ handleClose, children, isOpen, heading }) => {
  if (isOpen) {
    return (
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
          >
            <ModalContainer
              variants={containerVariant}
              className="modal-container"
            >
              <CloseButton
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20.39 20.39"
              >
                <title>close</title>
                <line
                  x1="19.39"
                  y1="19.39"
                  x2="1"
                  y2="1"
                  fill="none"
                  stroke="#5c3aff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <line
                  x1="1"
                  y1="19.39"
                  x2="19.39"
                  y2="1"
                  fill="none"
                  stroke="#5c3aff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </CloseButton>
              <h1
                style={{
                  padding: "0.5rem 0 0 1.2rem",
                  color: "red",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {heading}
              </h1>
              <br />
              <div style={{ paddingLeft: "2rem" }}>{children}</div>
            </ModalContainer>
          </Overlay>
        )}
      </AnimatePresence>
    );
  } else {
    return <></>;
  }
};

export default Modal;
