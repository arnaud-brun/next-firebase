import Document, { Head, Main, NextScript } from 'next/document'


// import "antd/dist/antd.css";
// node_modules/antd/dist/antd.min.css
// <link rel='stylesheet' type='text/css' href='../static/styles/antd.min.css'/>
export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
