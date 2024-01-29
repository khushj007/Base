"use client";
import React, {
  useState,
  ChangeEvent,
  DragEvent,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import styles from "./fileupload.module.css";
import Papa from "papaparse";
import Excel from "@/public/excel.png";
import Image from "next/image";
interface props {
  setdata: Dispatch<SetStateAction<Record<string, any>[] | null>>;
}
const FileUpload = ({ setdata }: props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files && e.target.files[0];
    console.log("upload file", uploadedFile);
    setFile(uploadedFile || null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handelRemoveFile = () => {
    setFile(null);
    setdata(null);
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Uploading file:");
    }
    Papa.parse(file!, {
      header: true,
      complete: (result: any) => {
        setdata(result.data);
      },
    });
  };

  return (
    <>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={styles.fileupload}
      >
        <input
          id="File"
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept=".csv"
        />
        {file ? null : (
          <>
            <Image src={Excel} alt="excel.png" className={styles.excel} />
            <p>
              Drag your excel sheet here or{" "}
              <label
                htmlFor="File"
                style={{ color: "#605bff", cursor: "pointer" }}
              >
                {" "}
                Browse
              </label>
            </p>
          </>
        )}
        {file && (
          <div>
            <Image src={Excel} alt="excel.png" className={styles.excel} />
            <p>upload-{file.name}</p>
            <p onClick={handelRemoveFile} className={styles.remove}>
              Remove
            </p>
          </div>
        )}
      </div>
      <button className={styles.uploadbutton} onClick={handleSubmit}>
        Upload
      </button>
    </>
  );
};

export default FileUpload;
