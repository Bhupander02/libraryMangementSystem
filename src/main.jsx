import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import BookDetails from "./components/BookDetails.jsx";
import BookList from "./components/Booklist.jsx";
import AddBook from "./components/AddBook.jsx";
import HomePage from "./components/HomePage.jsx";
import Contact from "./components/Contact.jsx";
import BrowsePage from "./components/BrowsePage.jsx";

const appBrowser = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "browse",
        element: <BookList />,
        errorElement: <Error />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        errElement: <Error />,
      },
      {
        path: "add",
        element: <AddBook />,
        errElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errElement: <Error />,
      },
      {
        path:"browse/:category",
        element: <BrowsePage />,
        errElement: <Error />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appBrowser} />
  </StrictMode>,
);
