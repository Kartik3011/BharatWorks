import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import InfoPage from "./pages/info/InfoPage";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/info/:slug" element={<InfoPage />} />

          <Route
            path="/add"
            element={
              <RequireAuth sellerOnly>
                <Add />
              </RequireAuth>
            }
          />
          <Route
            path="/mygigs"
            element={
              <RequireAuth sellerOnly>
                <MyGigs />
              </RequireAuth>
            }
          />
          <Route
            path="/orders"
            element={
              <RequireAuth>
                <Orders />
              </RequireAuth>
            }
          />
          <Route
            path="/messages"
            element={
              <RequireAuth>
                <Messages />
              </RequireAuth>
            }
          />
          <Route
            path="/message/:id"
            element={
              <RequireAuth>
                <Message />
              </RequireAuth>
            }
          />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
