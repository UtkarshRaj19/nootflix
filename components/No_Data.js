export default function No_Data() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="relative isolate min-h-full">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            {/* <p className="text-base font-semibold leading-8 text-white">404</p> */}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">No Data Found</h1>
            <p className="mt-4 text-base text-white sm:mt-6">Please try after some time</p>
            <div className="mt-10 flex justify-center">
              <a href="/trailers" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true"></span> Reload Page
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }  