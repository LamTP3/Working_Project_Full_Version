import styled from "styled-components";

type Props = {
  $circle?: boolean;
  $heightElement?: boolean;
  $disabled?: boolean;
};
export const CheckboxWarraper = styled.div<Props>`
  .ant-checkbox-wrapper {
    margin-top: ${(props) => (props.$heightElement ? "36px" : "0px")};
    white-space: nowrap;
  }
  .ant-checkbox-inner {
    border: 1.5px solid var(--text-color) !important;
    background-color: var(--background-color) !important;
    width: 20px !important;
    height: 20px !important;
    border-radius: ${(props) => (props.$circle === true ? "50px" : "4px")};
  }
  .ant-checkbox-inner::after {
    inset-inline-start: 29% !important;
  }

  .ant-checkbox + span {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 19.26px;
    color: var(--text-color);
  }
  .ant-checkbox-wrapper-checked {
    .ant-checkbox + span {
      color: ${(props) =>
        props.$disabled ? "var(--text-color)" : "var(--white-color)"};
    }
  }
  :where(.css-dev-only-do-not-override-1uq9j6g).ant-checkbox-disabled
    .ant-checkbox-inner:after {
    border-color: var(--text-color) !important;
  }
`;
