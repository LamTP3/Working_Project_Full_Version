import styled from "styled-components";

export const Warraper = styled.div`
  .ant-collapse {
    background-color: var(--background-color) !important;
    border: none;
    .ant-collapse-header-text {
      color: var(--white-color);
      font-size: 24px;
      font-weight: 700;
      line-height: 29.05px;
      font-family: var(--font-family);
    }
  }
  .ant-collapse-content {
    border: none !important;
    background-color: var(--background-color) !important;
    .ant-collapse-content-box {
      min-height: 100px;
    }
  }
  .header-style {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    .title-style {
      white-space: nowrap;
    }
    .line-between {
      height: 1px;
      width: 100%;
      background: #24265b;
    }
  }

  .ant-collapse-header {
    padding: 12px 0px !important;
  }

  .ant-collapse-content-box {
    padding: 16px 0px !important;
  }

  @media (max-width: 600px) {
    .header-style {
      gap: 10px;
    }
  }

  @media (max-width: 400px) {
    .header-style {
      gap: inherit;
    }
  }
`;
