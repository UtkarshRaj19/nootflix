import Link from "next/link";
import Head from 'next/head';
import Navbar from "../components/Navbar"
import classes from "../styles/styles.module.css"
import Image from "next/image";

export const metadata = {
  title: 'Nootfilix',
  icons: {
    icon: "/favicon.ico"
  }
}
export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <div
      
      >
        <div className="w-screen -z-10 absolute h-screen">
          <Image
            src={"/background.png"}
            alt=""
            className="h-full w-full -z-10 object-cover top-0"
            fill
            priority={true}
          />
        </div>
        <Navbar />
        <div className=" w-full flex justify-center items-center ">
          <div className={classes.customspin}>
            <img src="/nootfilix.png" className="h-[300px] w-[300px] sm:w-[500px] sm:h-[500px]" alt="Nootfilix" />
          </div>
        </div>
      </div></>
  );
}
