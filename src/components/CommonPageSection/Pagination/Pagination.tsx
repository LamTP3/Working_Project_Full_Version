import { NextAnPrevIcon } from "../../../Icon";
import { Pagination } from "antd";
import "./Pagination.scss";
import React from "react";
import { PaginationComponentProps } from "../SectionType";

const PaginationComponent: React.FC<PaginationComponentProps> = (props) => {
  /** REQUIRE PARAMS
   *  @param {number} current    - dùng để đáng dấu trang hiện tại trong pagination
   *  @param {number} pageSize   - dùng để hiển thị số item trên một trang
   *  @param {number} total      - tổng số item
   *  @param {function} onChange - hàm gọi khi thay đổi trang
   */
  const { current, pageSize, total, onChange } = props;

  /** FUNCTION itemRender dùng để hiển thị icon cho pagination
   * @param _
   * @param type
   * @param originalElement
   * @returns
   */
  const itemRender = (
    _: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return <NextAnPrevIcon name="prev" />;
    }
    if (type === "next") {
      return <NextAnPrevIcon name="next" />;
    }

    return originalElement;
  };

  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      showSizeChanger={false}
      itemRender={itemRender}
      onChange={onChange}
      showLessItems
      jumpPrevIcon={<span>•••</span>}
      jumpNextIcon={<span>•••</span>}
      align="end"
    />
  );
};

export default PaginationComponent;
