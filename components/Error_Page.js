export default function Error_Page() {
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
          <img
            src="https://images3.alphacoders.com/114/11439.png"
            // src="https://wallpaperset.com/w/full/8/0/0/33629.jpg"
            // src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page Under Maintenance</h1>
            <p className="mt-4 text-base text-white sm:mt-6">We regret to inform you that the page you are searching for is currently undergoing maintenance.</p>
            <div className="mt-10 flex justify-center">
              <a href="/" className="text-sm font-semibold leading-7 text-white">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }  