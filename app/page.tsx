import Image from "next/image";
import styles from "./page.module.css";
import Github from "@/public/github.svg";
import Linkdin from "@/public/linkedin.svg";
import Discord from "@/public/discord.svg";
import Twitter from "@/public/twitter.svg";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Google from "@/public/google.png";

export default function Home() {
  return (
    <main>
      <div className={styles.left}>
        <h1 className={styles.logo}>LOGO</h1>
        <h1 className={styles.cname}>BASE</h1>
        <div className={styles.links}>
          <Image src={Github} alt="github.svg" />{" "}
          <Image src={Twitter} alt="twitter.svg" />{" "}
          <Image src={Linkdin} alt="linkdin.svg" />{" "}
          <Image src={Discord} alt="discord.svg" />{" "}
        </div>
        <div className={styles.right}>
          <div className={styles.navbar}>
            <h1>BASE</h1>
          </div>
          <div className={styles.heading}>
            <h1>Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className={styles.buttons}>
            <button>
              {" "}
              <Image
                src={Google}
                alt="google.png"
                className={styles.icon}
              />{" "}
              &nbsp; Sign in with Google
            </button>
            <button>
              <AppleIcon className={styles.icon} style={{ color: "#A2AAAD" }} />{" "}
              &nbsp; Sign in with Apple
            </button>
          </div>
          <div className={styles.content}>
            <p>Email address</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
            <p>Forgot password ?</p>
            <Link href={"/dashboard"}>Sign In</Link>
            <p className={styles.register}>
              Don&apos;t have account ?{" "}
              <span style={{ color: "#605bff", cursor: "pointer" }}>
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
