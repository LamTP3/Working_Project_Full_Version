import styled from "styled-components";

type Props = {
  $width?: string;
  $height?: string;
  $disabled?: boolean;
};
export const UploadFileWarraper = styled.div<Props>`
.ant-upload-disabled {
opacity: 0.5;
}
  .ant-upload-list-item-container {
    height: 137px !important;
    width: 137px !important;
    opacity: ${(props) => (props?.$disabled ? "0.5" : "1")};
    .ant-upload-list-item-thumbnail {
      font-size: 20px;
      font-weight: 600;
      color: var(--text-color) !important;
    }
    .ant-upload-list-item-error {
      border-color: var(--text-color) !important;
    }
    .ant-tooltip {
      display: none;
    }
  }
  .ant-upload-select {
    height: ${(props) => (props?.$height ? props?.$height : "137px")}!important;
    width: ${(props) => (props?.$width ? props?.$width : "137px")}!important;
    background-color: var(--primary-input-bg) !important;
    border: 2px dashed #24265b !important;
    .ant-upload {
      button {
        svg {
          display: unset;
        }
      }
    }
    .text-style {
      font-size: 10px;
      font-weight: 400;
      color: var(--text-color) !important;
    }
  }
`;
