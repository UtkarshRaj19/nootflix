import Link from "next/link";
import Head from 'next/head';
import Navbar from "../components/Navbar"
import Error_Page from "../components/Error_Page"

export const metadata = {
  title: 'Web Series',
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
      {/* <Navbar/> */}
      <Error_Page/>
      </div>
  </>
  );
}