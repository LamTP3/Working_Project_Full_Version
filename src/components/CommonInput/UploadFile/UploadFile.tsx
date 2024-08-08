import React, { useState, useEffect } from "react";
import { Image, Upload } from "antd";
import { UploadFileWarraper } from "./styled";
import { UploadFileProps } from "./UploadFileType";
import { UploadBoxIcon } from "../../../Icon";
import type { GetProp, UploadFile, UploadProps } from "antd";

//Định nghĩa kiểu dữ liệu của file tải lên.
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

//Hàm chuyển đổi file thành base64 để xem trước.
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadFileComp: React.FC<
  UploadFileProps & { value?: string; onChange?: (value: string) => void }
> = ({ width, height, label, value, onChange, disabled, ...restProps }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (value) {
      setPreviewImage(value);
      setFileList([
        { uid: "-1", name: "image.png", status: "done", url: value },
      ]);
    }
  }, [value]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url ?? (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0];
      const base64 = await getBase64(file.originFileObj as FileType);
      onChange?.(base64);
    } else {
      onChange?.("");
    }
  };

  const beforeUpload = () => {
    return false;
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <UploadBoxIcon />
      <div style={{ marginTop: 8 }} className="text-style">
        {label}
      </div>
    </button>
  );

  return (
    <UploadFileWarraper
      $width={`${width}`}
      $height={`${height}`}
      $disabled={disabled}
    >
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        disabled={disabled}
        {...restProps}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </UploadFileWarraper>
  );
};

export default UploadFileComp;
