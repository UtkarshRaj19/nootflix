import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <Script
          async={true}
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HHDPVJGZSB"
        />
        <Script
          id="gtag-init"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-HHDPVJGZSB');`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}