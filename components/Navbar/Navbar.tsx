import styles from "./navbar.module.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Profile from "@/public/profile.jpeg";
import Image from "next/image";

const Navbar = ({ setValue }: any) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nleft}>
        <DensityMediumIcon
          onClick={() => {
            setValue(true);
          }}
        />
        <h1>BASE</h1>
      </div>
      <div className={styles.nright}>
        <NotificationsNoneOutlinedIcon className={styles.icon} />
        <Image src={Profile} alt="profile.jpeg" />
      </div>
    </div>
  );
};

export default Navbar;
