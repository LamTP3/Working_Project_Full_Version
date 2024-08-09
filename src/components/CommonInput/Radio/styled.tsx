import styled from "styled-components";
type RadioProps = {
  $diabled?: boolean;
};

export const StyledRadio = styled.div<RadioProps>`
  .ant-radio-wrapper {
    .ant-radio-inner {
      border: 1.5px solid var(--text-color) !important;
      background-color: var(--background-color) !important;
      border-radius: 5px !important;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-radio + * {
      color: var(--text-color);
      font-family: var(--font-family);
      font-size: 16px;
      font-weight: 500;
      line-height: 19.36px;
    }

    .ant-radio-checked .ant-radio-inner {
      position: relative;
    }

    .ant-radio-checked .ant-radio-inner::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background: url(../../../assets/Logo/image.png) no-repeat center center;
      background-size: contain;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }

    .ant-radio-inner::after {
      display: none;
    }
  }

  .ant-radio-group {
    opacity: ${(props) => (props.$diabled ? "0.5" : "1")};
  }
`;
