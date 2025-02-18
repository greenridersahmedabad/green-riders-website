import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path={`${isprod ? "/green-riders-website" : "/"}`}
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path={`${isprod ? "/green-riders-website" : "/about"}`}
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path={`${isprod ? "/green-riders-website" : "/blog"}`}
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path={`${isprod ? "/green-riders-website" : "/events"}`}
          element={
            <PageWrapper>
              <Events />
            </PageWrapper>
          }
        />
        {/* Redirect all other paths to "/" */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
