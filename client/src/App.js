import React from "react";

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

// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Home />} />
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
    </div>
  );
}

export default App;
