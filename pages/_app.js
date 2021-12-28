import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>Kossans footer</p>
      </footer>
    </>
  );
}

export default MyApp
