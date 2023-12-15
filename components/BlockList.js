  
  export default function BlockList(props) {
    const dateHandler = (date) => {
      const dateObj = new Date(date);
      const day = dateObj.getDate();
      const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
      const year = dateObj.getFullYear();
      const hour = dateObj.getHours();
      const month = dateObj.getMonth();
      return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year + "," + (hour <= 9 ? "0" : "") + hour + ":" + (month <= 9 ? "0" : "") + month;
    };
    const dateHandlerTwo = (date) => {
      const dateObj = new Date(date);
      const day = dateObj.getDate();
      const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
      const year = dateObj.getFullYear();
      return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
    };
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8">
          {/* <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div> */}
          <div className="mx-auto  grid grid-cols-2 max-w-2xl auto-rows-fr  sm:gap-8 gap-4  lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {props.data?.map((post) => (
              <article
                key={post.ID}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 sm:pt-48 lg:pt-40"
              >
                <img src={post.thumbnail} alt="" className="absolute inset-0 -z-10 h-full w-full object-fill" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.insertdate} className="mr-8">
                    {dateHandlerTwo(post.insertdate)}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    {/* <div className="flex gap-x-2.5"> */}
                      {/* <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" /> */}
                      {/* {post.author.name} */}
                    {/* </div> */}
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={"/video_player/"+post.ID}>
                    <span className="absolute inset-0" />
                    {post.movieName}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }  