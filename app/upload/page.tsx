"use client";
import { useState } from "react";
import styles from "./upload.module.css";
import SideBar from "@/components/Sidebar/SideBar";
import FileUpload from "@/components/FileUpload/FileUpload";
import CreateTable from "@/components/CreateTable/CreateTable";
import Navbar from "@/components/Navbar/Navbar";
import { usemyContext } from "@/context/context";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Profile from "@/public/profile.jpeg";
import Image from "next/image";
import MobileSidebar from "@/components/MobileSideBar/MobileSidebar";

const Pages = () => {
  const [data, setData] = useState<Record<string, any>[] | null>(null);
  const { value, setValue }: any = usemyContext();

  return (
    <div className={styles.main}>
      <MobileSidebar value={value} />
      <SideBar />
      <div className={styles.right}>
        <Navbar setValue={setValue} />
        <div className={styles.title}>
          <h1>Upload CSV</h1>
          <div className={styles.rnav}>
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <Image src={Profile} alt="bell.png" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.upload}>
            <FileUpload setdata={setData} />
          </div>
        </div>
        {data && (
          <CreateTable
            data={data}
            heading={data ? Object.keys(data[0]) : null}
          />
        )}
      </div>
    </div>
  );
};

export default Pages;
