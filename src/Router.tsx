import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaltLayout";
import { Home } from "./pages/home";
import { Post } from "./pages/post";
import { IssuesProvider } from "./context/IssuesContext";

export function Router() {
  return (
    <IssuesProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </IssuesProvider>

  );
}
