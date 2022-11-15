import React from 'react';
import {AnimatePresence, motion} from "framer-motion"


interface AlertProps {
  show: boolean;
  type: string;
  onDismiss?: () => void | undefined;
}

const Alert: React.FC<AlertProps> = ({show, type, onDismiss}) => {

  const alertCss: string = "w-50 mx-auto mt-3 alert justify-content-between alert-" + type;

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity: 2, scale: 0}}
            transition={{ duration: 0.5 }}
            className={alertCss}
            role="alert"
            style={{display: show ? "flex" : "none"}}>
            <p className="m-0">A simple dark alert—check it out!</p>
            <button type="button" className="btn-close" style={{display: show ? "block" : "none"}} onClick={onDismiss}></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Alert;