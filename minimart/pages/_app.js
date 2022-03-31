import { Provider } from "react-redux";
import { createStore } from "redux";
import '../styles/globals.css';
import allStore from '../utility/store/combine';

const store = createStore(allStore);

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
