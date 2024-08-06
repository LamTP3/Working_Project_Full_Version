import type { UploadProps as AntdUploadProps } from "antd";

export interface UploadFileProps extends AntdUploadProps {
  label: string;
  height?: string;
  width?: string;
}
