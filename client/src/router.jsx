import { createBrowserRouter, Navigate } from "react-router-dom";
import { PostList } from "./pages/PostList";

import { TodoList } from "./pages/TodoList";
import { RootLayout } from "./layouts/RootLayout";
import { UsersList } from "./pages/UsersList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      { path: "posts", element: <PostList /> },

      { path: "todos", element: <TodoList /> },
      { path: "users", element: <UsersList /> },
    ],
  },
]);
