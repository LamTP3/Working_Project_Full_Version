import { Project } from "../../../type/type";
import PaginationComponent from "../Pagination/Pagination";
import "./Table.scss";

interface TableProps {
  data: Project[];
  onPageChange: (page: number, size?: number) => void;
  currentPage: number;
  pageSize: number;
  TableHead: React.ReactNode;
  TableBody: (data: any[]) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({
  data,
  onPageChange,
  currentPage,
  pageSize,
  TableHead,
  TableBody,
}) => {
  return (
    <>
      <div>
        <table className="table-content">
          <thead>{TableHead}</thead>
          <tbody>{TableBody(data)}</tbody>
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
};

export default Table;
