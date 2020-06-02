import Document, { Html, Head, Main, NextScript } from 'next/document';

interface Props {
  locale: "fr-FR";
}

class MyDocument extends Document<Props> {
  render() {
    return (
      <Html lang={this.props.locale.split('-')[0]}>
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
