import React from "react";
import { Modal } from "antd";
import { ModalProps } from "./ModalType";
import "./Modal.scss";

const ModalComponents: React.FC<ModalProps> = ({
  open,
  handleCancel,
  getTitle,
  getContent,
  getFooter,
}) => {
  return (
    <Modal
      open={open}
      title={getTitle()}
      centered
      onCancel={handleCancel}
      footer={getFooter()}
    >
      {getContent()}
    </Modal>
  );
};

export default ModalComponents;
