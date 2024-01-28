"use client";
import React, { useState } from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

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
const SideBar = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("Upload");
  const handleItemClick = (name: string) => {
    setSelectedComponent(name);
  };
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logo}>BASE</h1>
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

export default SideBar;
