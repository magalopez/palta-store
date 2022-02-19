import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap');
        </style>
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}