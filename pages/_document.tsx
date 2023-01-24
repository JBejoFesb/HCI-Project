import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="HCL.hr" />
        <meta name="keywords" content="HCL, gaming, vijesti" />
        <meta name="description" content="HCL je najveći hrvatski gaming portal, a nudi vijesti, recenzije i više za videoigre i esport. Pokrivamo PC, PlayStation, Xbox, Nintendo, Android, iOS i esports turnire." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
