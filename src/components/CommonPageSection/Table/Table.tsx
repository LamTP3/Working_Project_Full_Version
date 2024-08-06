
import { MenuProps } from "antd";
import { Project } from "../../../type/type";

import PaginationComponent from "../Pagination/Pagination";
import "./Table.scss";
import { ModalName } from "../Modal/ModalType";

interface TableProps {
  data: Project[];
  onOpenModal: (modal_name: ModalName) => void;

  onPageChange: (page: number, size?: number) => void;
  currentPage: number;
  pageSize: number;
  dropdownItems: MenuProps["items"];
  TableHead: React.ReactNode
  TableBody: (data: any[]) => React.ReactNode;
}

function Table({
  data,
  onPageChange,
  currentPage,
  pageSize,
  TableHead,
  TableBody
}: TableProps) {


  return (
    <>
      <div>
        <table className="table-content">
          <thead>
            {TableHead}
          </thead>
          <tbody>
            {TableBody(data)}
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <PaginationComponent
          total={data.length}
          current={currentPage}
          pageSize={pageSize}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}

export default Table;
