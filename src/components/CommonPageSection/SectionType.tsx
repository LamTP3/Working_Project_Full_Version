/**
 * props cho component CollapseComponent
 */
export interface CollapseProps {
  title: string;
  child: React.ReactNode;
  active?: boolean;
}

/**
 * props cho component Logo
 */
export type LogoProps = {
  // small: 40px, medium: 50px, large: 100px
  size: "small" | "medium" | "large";
};

/**
 * props cho component Pagination
 */
export interface PaginationComponentProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize?: number) => void;
}

/**
 * props cho component Modal
 */

export type ModalName = "Confirm" | "Reject" | "Delete";

export type ModalProps = {
  open: boolean;
  getTitle: () => string;
  getFooter: () => React.ReactNode;
  getContent: () => React.ReactNode;
  handleCancel: () => void;
};

/**
 * props cho component Table
 */

export interface TableProps {
  data: any[];
  onPageChange: (page: number, size?: number) => void;
  currentPage: number;
  pageSize: number;
  TableHead: React.ReactNode;
  TableBody: (data: any[]) => React.ReactNode;
}
