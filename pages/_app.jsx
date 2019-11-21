import App, {Container} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import mediaQuery from 'css-mediaquery'; ?? 
import theme from '../theme';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    // const ssrMatchMedia = query => ({
    //   matches: mediaQuery.match(query, {
    //     width: 1200, 
        // replace with client-hint https://caniuse.com/#search=client%20hint
    //   }),
    // });
    return (
      <React.Fragment>
        <Head>
          <title>Alex page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}