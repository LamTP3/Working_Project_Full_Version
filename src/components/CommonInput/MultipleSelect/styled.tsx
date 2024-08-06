import styled from "styled-components";
type Props = {
  $disabled?: boolean;
}
export const MultipleSelectWarraper = styled.div<Props>`
  .ant-select-selector {
  opacity: ${(props) => (props.$disabled ? "0.5" : "1")};
    border: none !important;
    background-color: var(--primary-input-bg) !important;
    .ant-select-selection-overflow {
      .ant-select-selection-item {
        background-color: #24265b !important;
        height: 23px;
        margin-inline-start: 8px;
        .ant-select-selection-item-content {
          color: #fff;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 16.94px;
          padding-top: 1px;
        }
        span.anticon {
          svg {
            path {
              fill: white;
            }
          }
        }
      }
    }
  }
  .ant-select-arrow {
    display: none !important;
  }
  .ant-select-multiple {
    .ant-select-selection-placeholder {
      color: #7d7e8d;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
