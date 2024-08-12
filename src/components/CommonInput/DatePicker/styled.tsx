import styled from "styled-components";
type Props = {
  $disabled?: boolean;
};
export const DatePickerWarraper = styled.div<Props>`
  .ant-picker {
    border-radius: 5px;
    border: none;
    height: 40px;

    width: 100%;

    opacity: ${(props) => (props.$disabled ? "0.3" : "1")};
    .ant-picker-clear {
      left: calc(100% - 45px);
      width: 14px;
      opacity: 1;
    }
    &:hover {
      .ant-picker-suffix {
        opacity: 1;
      }
    }
  }
  .ant-picker-outlined {
    background-color: var(--primary-input-bg) !important;
  }

  .ant-picker-input input {
    color: var(--text-color) !important;
  }
  .ant-picker-input input::placeholder {
    color: var(--gray-color) !important;
  }
  span.anticon {
    display: ${(props) => (props.$disabled ? "none" : "block")};
    svg {
      path {
        fill: white;
      }
    }
  }
  :where(.css-dev-only-do-not-override-1uq9j6g).ant-picker-dropdown
    .ant-picker-ranges
    .ant-picker-ok {
    display: none;
  }
`;
