import styles from "./navbar.module.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Profile from "@/public/profile.jpeg";
import Image from "next/image";
import { usemyContext } from "@/context/context";
import { useRouter } from "next/navigation";

const Navbar = ({ setValue }: any) => {
  const router = useRouter();
  const { pvalue, setPvalue }: any = usemyContext();

  function Logout() {
    setPvalue(false);
    router.push("/");
  }
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
        <div className={styles.profileinfo}>
          <Image
            onClick={() => {
              setPvalue(!pvalue);
            }}
            src={Profile}
            alt="profile.jpeg"
          />

          <div
            style={{ display: pvalue ? "flex" : "none" }}
            className={styles.extrainfo}
          >
            <p onClick={Logout}>Logout</p>
            <p>option1</p>
            <p>option2</p>
            <p>option3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
