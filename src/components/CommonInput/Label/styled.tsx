import styled from "styled-components";

type Props = {
  $disabled?: boolean;
};
export const Warraper = styled.div<Props>`
  .label-color {
    color: var(--text-color);
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    text-align: left;
    opacity: ${(props) => (props.$disabled ? "0.5" : "1")};
  }
  .required-asterisk {
    color: red;
    margin-left: 5px;
  }
`;
