import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// base
import './base/_fonts.scss'
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./base/keyframes.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";
import "./base/_base.scss";

// react router dom
import {BrowserRouter} from "react-router-dom";

// react query
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

// recoil
import {RecoilRoot} from "recoil";

const queryClient = new QueryClient();

// basename={"/" + localStorage.getItem("i18nextLng")}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <App/>
                </RecoilRoot>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
