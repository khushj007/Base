import styles from "./popover.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useState } from "react";

const Popover = ({
  data,
  handelChange,
  index,
}: {
  data: string[];
  handelChange: any;
  index: number;
}) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [selectedvalue, setSelectedvalue] = useState<string>("");
  return (
    <div className={styles.popover}>
      <p
        onClick={() => {
          setPopup(!popup);
        }}
        className={styles.heading}
      >
        Select Tags &nbsp;{" "}
        <KeyboardArrowDownOutlinedIcon style={{ color: "#999ca0" }} />
      </p>
      <div className={styles.tags} style={{ display: popup ? "flex" : "none" }}>
        {" "}
        {data.map((value: string) => {
          return (
            <p
              className={styles.tag}
              onClick={(e: any) => {
                handelChange(index + 1, value);
              }}
              key={value}
            >
              {value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Popover;
