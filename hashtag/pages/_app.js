import "../styles/globals.css";
import tf from "./tf";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <tf />
    </>
  );
}

export default MyApp;
