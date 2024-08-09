import PaginationComponent from "../Pagination/Pagination";
import "./Table.scss";

import { TableProps } from "../SectionType";

const Table: React.FC<TableProps> = (props) => {
  /**REQUIRE PARAMS
   * @param {any[]} data            - dữ liệu table
   * @param {function} onPageChange - hàm gọi khi thay đổi trang
   * @param {number} currentPage    - trang hiện tại
   * @param {number} pageSize       - dùng này một trang
   * @param {function} TableHead    - hàm gọi khi thay đổi tiêu đề table
   * @param {function} TableBody    - hàm gọi khi thay đổi nội dung table
   *
   */
  const { data, onPageChange, currentPage, pageSize, TableHead, TableBody } =
    props;
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
