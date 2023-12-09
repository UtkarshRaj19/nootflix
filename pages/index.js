import Link from "next/link";
import Head from 'next/head';
import Navbar from "../components/Navbar"
import classes from "../styles/styles.module.css"

export const metadata = {
  title: 'Nootfilix',
  icons:{
    icon:"/favicon.ico"
  }
}
export default function Home() {
  return (
  <>
      <Head>
        <title>{metadata.title}</title>
      </Head>    

      <div
        className="w-full h-screen bg-zinc-50 "
        style={{
          backgroundImage: `url('background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <Navbar/>
     <div className=" w-full flex justify-center items-center pt-20"> 
     <div className={classes.customspin}>
      <img src="/nootfilix.png" className="h-[300px] w-[300px] sm:w-[500px] sm:h-[500px]" alt="Nootfilix"/>
      </div>
      </div>
      </div></>
  );
}
