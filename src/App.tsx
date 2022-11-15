import React, {useState} from 'react';
import Modal from "./Modal/Modal";
import Alert from "./Alert/Alert";
import Button from "./Button/Button";
import {ModalConfig} from "./types";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showPrimaryAlert, setShowPrimaryAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);

  const cancelModal = () => setShowModal(false);
  const cancelAlert = () => setShowAlert(false);
  const cancelPrimaryAlert = () => setShowPrimaryAlert(false);
  const cancelSuccessAlert = () => setShowSuccessAlert(false);
  const cancelDangerAlert = () => setShowDangerAlert(false);
  const cancelWarningAlert = () => setShowWarningAlert(false);

  const modalConfigurations: ModalConfig [] = [
    {type: 'primary', label: 'Continue', onClick: () => setShowAlert(true)},
    {type: 'danger', label: 'Close', onClick: cancelModal}
  ];

  return (
    <>
      <div className="d-flex justify-content-around p-3">
        <Button buttonType={"dark"} name={"Show modal"} onClick={() => setShowModal(true)}/>
        <Button buttonType={"dark"} name={"Show alert"} onClick={() => setShowAlert(true)}/>
        <Button buttonType={"primary"} name={"Primary alert"} onClick={() => setShowPrimaryAlert(true)}/>
        <Button buttonType={"success"} name={"Success alert"} onClick={() => setShowSuccessAlert(true)}/>
        <Button buttonType={"danger"} name={"Danger alert"} onClick={() => setShowDangerAlert(true)}/>
        <Button buttonType={"warning"} name={"Warning alert"} onClick={() => setShowWarningAlert(true)}/>
      </div>
      <Modal show={showModal} title={"Attention"} onClose={cancelModal} config={modalConfigurations}>
        <div className="modal-body">
          <p>Don't take a nap</p>
        </div>
      </Modal>
      <Alert show={showAlert} type={"warning"} onDismiss={cancelAlert}/>
      <Alert show={showPrimaryAlert} type={"primary"} onDismiss={cancelPrimaryAlert}/>
      <Alert show={showSuccessAlert} type={"success"} onDismiss={cancelSuccessAlert}/>
      <Alert show={showDangerAlert} type={"danger"} onDismiss={cancelDangerAlert}/>
      <Alert show={showWarningAlert} type={"warning"} onDismiss={cancelWarningAlert}/>
    </>
  );
}

export default App;
