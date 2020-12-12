import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <script
            src="https://kit.fontawesome.com/c7ab248106.js"
            crossorigin="anonymous"
          ></script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap"
            rel="stylesheet"
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
            rel="stylesheet"
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Bungee&family=Fredoka+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@900&family=Raleway:wght@900&family=Signika:wght@900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
