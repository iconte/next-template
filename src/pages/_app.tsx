import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

export default function Acesso({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
