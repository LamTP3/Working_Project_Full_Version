import styled from "styled-components";

type Props = {
  $width?: string;
};
export const ButtonWarraper = styled.div<Props>`
  .Gradient {
    background: linear-gradient(
      84.71deg,
      #003fdd -11.67%,
      #18ff71 111.15%
    ) !important;
  }
  .Gradient:hover {
    box-shadow: 0 0 20px rgba(0, 63, 221, 0.5);
  }

  .Gradient_Danger {
    background: linear-gradient(
      84.71deg,
      #8f1818 -11.67%,
      #ff4466 111.15%
    ) !important;
  }
  .Gradient_Danger:hover {
    box-shadow: 0 0 20px rgba(143, 24, 24, 0.5);
  }

  .Gradient_Default {
    background: var(--primary-input-bg) !important;
  }
  .Gradient_Default:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .no-border {
    border: none;
  }

  .ant-btn-primary {
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
  }
  .ant-btn {
    border-radius: 100px;
    height: 50px;
    width: ${(props) => (props.$width ? props.$width : "auto")};
    padding: 10px 24px;
  }
`;
