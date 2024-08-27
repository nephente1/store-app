import type { AppProps } from "next/app";
import { persistor, store } from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from "react-redux";
import { PageView } from "../app/components/PageView";
import { theme } from "@/app/styles/styles";
import "../app/styles/global.css";
import Head from "next/head";


const App = ({ Component, pageProps }: AppProps) => {
  return (
		<>
			<Head>
        <title>My Shop App in Next.js</title>
      </Head>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
							<PageView>
								<Component {...pageProps} />
							</PageView>
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</>
  );
}

export default App;
