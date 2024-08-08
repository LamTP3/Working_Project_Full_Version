import React from "react";
import { Pagination } from "antd";
import "./Pagination.scss";
import NextAnPrevIcon from "../../../Icon/NextAndPrevIcon/NextAnPrevIcon";

interface PaginationComponentProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize?: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  current,
  pageSize,
  total,
  onChange,
}) => {
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
