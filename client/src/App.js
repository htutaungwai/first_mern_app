import React from "react";
// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

//  #region ----------[ Import Components ]----------
import {
  Home,
  BlogDetails,
  Blogs,
  Login,
  NewBlog,
  PrivateRoute,
  Profile,
  Register,
} from "./pages/index";
import { ToastContainer, Zoom, Slide, Bounce, Flip } from "react-toastify";

//    #region ---------------[ANIMATION ZONE]-----------------------
function transitionAnimation() {
  const list = [Zoom, Slide, Bounce, Flip];
  return list[Math.floor(Math.random() * list.length)];
}

function transitionPostion() {
  const list = ["top-right", "top-center", "top-left"];
  return list[Math.floor(Math.random() * list.length)];
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/blogs" element={<PrivateRoute />}>
            <Route path="/blogs" element={<BlogList />} />
          </Route>

          <Route path="/blogs/:id" element={<PrivateRoute />}>
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Route>

          <Route path="/newblog" element={<PrivateRoute />}>
            <Route path="/newblog" element={<BlogList />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer
        position={transitionPostion()}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
