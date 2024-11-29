import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaltLayout";
import { Home } from "./pages/home";
import { Post } from "./pages/post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  );
}
