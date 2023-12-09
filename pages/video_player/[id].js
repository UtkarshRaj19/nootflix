
import Head from 'next/head';
import Navbar from "../../components/Navbar"
import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';

// export const metadata = {
//   title: 'Nootfilix',
//   icons:{
//     icon:"/favicon.ico"
//   }
// }
export default function Home() {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
const router=useRouter()
    useEffect(()=>{
      router.query.id&&getDataByID(router.query.id);
    },[router.query.id])

    const getDataByID=(id)=>{
        var formdata = new FormData();
        formdata.append("ID", id);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://s2fwl9bcyl.execute-api.ap-south-1.amazonaws.com/dev/getmoviebyid", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.data))
        .catch(error => console.log('error', error));
    }
  return (
  <>
      <Head>
        <title>{data?.movieName}</title>
      </Head>    

   { data?  <div
        className="w-full h-full min-h-screen bg-zinc-50 "
        style={{
          backgroundImage: `url(${data?.fullImage||"/background.png"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <Navbar/>
      <div className="w-full pt-40 sm:pt-20 flex justify-center items-center">
      {   data?   <video
                className="rounded-lg h-[160px] sm:h-[450px] sm:w-[780px] w-[320px] shadow-xl object-fill"
                // autoPlay
                controls
                poster={data.thumbnail}
              >
                <source
                  src={data.videoFile}
                  type="video/mp4"
                />
              </video>:<></>}
      </div>
      </div>:<></>}
      
      </>
  );
}