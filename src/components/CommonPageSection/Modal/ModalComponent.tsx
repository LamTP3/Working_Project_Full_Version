import React from "react";
import { Modal } from "antd";
import { ModalProps } from "../SectionType";
import "./Modal.scss";

const ModalComponents: React.FC<ModalProps> = (props) => {
  /**REQUIRE PARAMS
   * @param {boolean} open          - là trạng thái đóng mở modal
   * @param {function} handleCancel - dùng để đóng modal
   * @param {function} getTitle     - hàm gọi khi thay đổi tiêu đề modal
   * @param {function} getContent   - hàm gọi khi thay đổi nội dung modal
   * @param {function} getFooter    - hàm gọi khi thay đổi footer
   */
  const { open, handleCancel, getTitle, getContent, getFooter } = props;
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
