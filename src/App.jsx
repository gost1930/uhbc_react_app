import { ToastContainer } from "react-toastify";
import {
  Home,
  About,
  Courses,
  Time,
  Login,
  Dashboard,
  Classes,
  Subject,
  Lessons,
} from "./pages";
import { Nav, Footer, Contact } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

function App() {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/subject" ||
    location.pathname === "/classe" ||
    location.pathname === "/lessons";
  const isClasses = location.pathname === "/classe";
  const isSubject = location.pathname === "/subject";
  const isLessons = location.pathname === "/lessons";

  return (
    <section className="bg relative">
      {!hideNavAndFooter ? (
        <Nav />
      ) : (
        <div className="flex gap-x-3 text-lg font-semibold mb-4 p-4">
          <Link
            to="/classe"
            className={`${
              isClasses ? "text-green-500 border-b-2 border-green-500" : "text-gray-500"
            } underline hover:text-green-600 transition`}
          >
            الأقسام
          </Link>
          <span>/</span>
          <Link
            to="/subject"
            className={`${
              isSubject ? "text-green-500 border-b-2 border-green-500" : "text-gray-500"
            } underline hover:text-green-600 transition`}
          >
            المواد
          </Link>
          <span>/</span>
          <Link
            to="/lessons"
            className={`${
              isLessons ? "text-green-500 border-b-2 border-green-500" : "text-gray-500"
            } underline hover:text-green-600 transition`}
          >
            الدروس
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lessons/:name/:classId" element={<Courses />} />
        <Route path="/time" element={<Time />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classe" element={<Classes />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </section>
  );
}

export default function AppWrapper() {
  return (
    <>
      <Router>
        <App />
      </Router>
      <ToastContainer />
    </>
  );
}
