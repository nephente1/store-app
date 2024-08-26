

import type { AppProps } from "next/app";
import { persistor, store } from "../redux/store";
import { ThemeProvider } from 'styled-components';
import { Provider } from "react-redux";
import { PageView } from "../app/components/PageView";
import { theme } from "@/app/styles/styles";
import "../app/styles/global.css";
import { PersistGate } from 'redux-persist/integration/react';


const App = ({ Component, pageProps }: AppProps) => {
  return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
							<PageView>
								<Component {...pageProps} />
							</PageView>
					</ThemeProvider>
				</PersistGate>
			</Provider>
  );
}

export default App;
