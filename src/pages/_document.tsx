/* eslint-disable @next/next/google-font-display */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="title" content={'title'} key="og-title"/>
          <meta name="description" content="Shop App in next JS" /> 
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="author" content="Nephente" /> 
          <meta name="keywords" content="NextJS,GFG,custom document next,custom app next" /> 
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument