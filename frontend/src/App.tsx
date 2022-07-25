import * as React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Router from "./pages";

const queryClient = new QueryClient()
const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);

export default App;
