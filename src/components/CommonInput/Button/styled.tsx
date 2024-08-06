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
  .Gradient_Danger {
    background: linear-gradient(
      84.71deg,
      #8f1818 -11.67%,
      #ff4466 111.15%
    ) !important;
  }

  .Gradient_Default {
    background: var(--primary-input-bg) !important;
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
