"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Github from "@/public/github.svg";
import Linkdin from "@/public/linkedin.svg";
import Discord from "@/public/discord.svg";
import Twitter from "@/public/twitter.svg";
import Githubm from "@/public/mgithub.svg";
import Linkdinm from "@/public/mlinkdin.svg";
import Discordm from "@/public/mdiscord.svg";
import Twitterm from "@/public/mtwitter.svg";
import AppleIcon from "@mui/icons-material/Apple";
import Google from "@/public/google.png";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [details, setDetails] = useState<Record<string, string>>({
    email: "",
    password: "",
  });
  const router = useRouter();

  function handelUser() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!details.email) {
      alert("please provide Email since it is prototype you can provide any");
      return;
    }
    if (!emailRegex.test(details.email)) {
      alert("provide valid email address");
      return;
    }
    if (!details.password) {
      alert(
        "please provide password since it is prototype you can provide any"
      );
      return;
    }

    router.push("/upload");
  }
  function handelRegister() {
    alert(
      "since its a prototype you can provide any combination of email and password"
    );
  }

  function handelChange(e: ChangeEvent<HTMLInputElement>) {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

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
            <input name="email" onChange={handelChange} type="email" />
            <p>Password</p>
            <input name="password" onChange={handelChange} type="password" />
            <p>Forgot password ?</p>
            <button className={styles.signin} onClick={handelUser}>
              Sign In
            </button>
            <p className={styles.register}>
              Don&apos;t have account ?{" "}
              <span
                onClick={handelRegister}
                style={{ color: "#605bff", cursor: "pointer" }}
              >
                Register here
              </span>
            </p>
            <div className={styles.mobilelinks}>
              <Image src={Githubm} alt="github.svg" />{" "}
              <Image src={Twitterm} alt="twitter.svg" />{" "}
              <Image src={Linkdinm} alt="linkdin.svg" />{" "}
              <Image src={Discordm} alt="discord.svg" />{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
