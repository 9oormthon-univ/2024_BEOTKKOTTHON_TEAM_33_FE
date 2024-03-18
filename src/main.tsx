import ReactDOM from "react-dom/client";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Global, ThemeProvider } from "@emotion/react";
import globalStyles from "./styles/globalStyles";
import theme from "themes/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
