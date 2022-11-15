import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import {ModalConfig} from "../types";
import Button from "../Button/Button";

interface ModalProps extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  config: ModalConfig[];
}

const Modal: React.FC<ModalProps> = ({show, title, onClose, config, children}) => {
  return (
    <>
      <Backdrop show={show}/>
      <div
        className="modal show"
        style={{display: show ? "block" : "none"}}
        onClick={onClose}
      >
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            {children}
            <div
              className="justify-content-around border-top p-2"
              style={{display: config.length !== 0 ? "flex" : "none"}}>
              {config.map(button => {
                return <Button buttonType={button.type} name={button.label} onClick={button.onClick}/>
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Modal;