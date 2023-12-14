import Head from 'next/head';
import Navbar from "../components/Navbar"
import No_Data_Movie from "../components/No_Data_Movie"
import BlockList from "../components/BlockList"
import Loading from "../components/Loading"
import { useEffect, useState } from "react";

export const metadata = {
  title: 'Movie Library',
  icons: {
    icon: "/favicon.ico"
  }
}
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovie();
  }, [])

  const getMovie = () => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://s2fwl9bcyl.execute-api.ap-south-1.amazonaws.com/dev/movieslist", requestOptions)
      .then(response => response.json())
      .then(result => setData(result.data))
      .catch(error => console.log('error', error)).finally(() => { setLoading(false) })
  }
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <div
        className="w-full h-full min-h-screen bg-zinc-50 "
        style={{
          backgroundImage: `url('background.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        {loading ? <div><Loading /></div> : <>{data.length > 0 ? <BlockList data={data} /> : <No_Data_Movie />}</>}
      </div>
    </>
  );
}