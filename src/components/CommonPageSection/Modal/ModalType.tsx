import { Project } from "../../../type/type";

export type ModalName = "Confirm" | "Reject" | "Delete";
export type ModalProps = {
  open: boolean;
  getTitle: () => string;
  getFooter: () => React.ReactNode;
  getContent: () => React.ReactNode;
  handleCancel: () => void;
  data?: Project;
};
