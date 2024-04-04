import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import BaseChatPage, {
  route as base_chat_route,
} from "./pages/BaseChat/BaseChat";
import PromptChatPage, {
  route as prompt_chat_route,
} from "./pages/PromptChat/PromptChat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Initial Page</div>,
    },
    {
      path: base_chat_route,
      element: <BaseChatPage />,
    },
    {
      path: prompt_chat_route,
      element: <PromptChatPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
