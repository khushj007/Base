"use client";
import React, {
  useState,
  ChangeEvent,
  DragEvent,
  Dispatch,
  SetStateAction,
} from "react";
import styles from "./fileupload.module.css";
import Papa from "papaparse";

interface props {
  setdata: Dispatch<SetStateAction<Record<string, any>[] | null>>;
}
const FileUpload = ({ setdata }: props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files && e.target.files[0];
    setFile(uploadedFile || null);
  };

  const handelRemoveFile = () => {
    setFile(null);
    setdata(null);
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Uploading file:");
    }
    Papa.parse(file, {
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
          id="file"
          type="file"
          onChange={handleFileChange}
          accept=".csv"
        />
        {file ? null : (
          <p>
            Drag your excel sheet here or{" "}
            <label
              htmlFor="file"
              style={{ color: "#605bff", cursor: "pointer" }}
            >
              {" "}
              Browse
            </label>
          </p>
        )}
        {file && (
          <div>
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
