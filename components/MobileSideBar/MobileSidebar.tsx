"use client";
import styles from "./mobilesidebar.module.css";
import React, { Dispatch, useState } from "react";
import Link from "next/link";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { usemyContext } from "@/context/context";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const component = [
  {
    name: "Dashboard",
    icon: GridViewIcon,
  },
  {
    name: "Upload",
    icon: AssessmentIcon,
  },
  {
    name: "Invoice",
    icon: DescriptionOutlinedIcon,
  },
  {
    name: "Schedule",
    icon: EditCalendarOutlinedIcon,
  },
  {
    name: "Calander",
    icon: CalendarMonthOutlinedIcon,
  },
  {
    name: "Notification",
    icon: NotificationsActiveOutlinedIcon,
  },
  {
    name: "Settings",
    icon: SettingsOutlinedIcon,
  },
];

const MobileSidebar = ({ value }: { value: boolean }) => {
  const [selectedComponent, setSelectedComponent] = useState<string>("Upload");
  const { setValue }: any = usemyContext();
  const handleItemClick = (name: string) => {
    setSelectedComponent(name);
  };
  return (
    <div style={{ display: value ? "flex" : "none" }} className={styles.msb}>
      <div className={styles.heading}>
        <h1 className={styles.logo}>BASE</h1>
        <CloseOutlinedIcon
          onClick={() => {
            setValue(false);
          }}
          style={{ width: "15px", height: "15px", cursor: "pointer" }}
        />
      </div>
      {component.map((value) => {
        const textColor =
          selectedComponent === value.name ? "#605bff" : "#9a9aa9";
        return (
          <Link
            href={"/upload"}
            key={value.name}
            className={styles.component}
            onClick={() => handleItemClick(value.name)}
            style={{
              background:
                selectedComponent === value.name
                  ? "linear-gradient(90deg, rgba(28,27,36,0.2) 0%, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 66%)"
                  : "white",
            }}
          >
            <value.icon style={{ color: textColor }} />
            <p
              className={styles.info}
              style={{
                color: textColor,
              }}
            >
              {value.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileSidebar;
