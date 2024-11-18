import { ToastContainer } from "react-toastify";
import {Courses, Home, About, Time, Login, Dashboard } from "./pages";
import {  Classes, Subject, Lessons , WeeklyTime} from "./Dashboard";
import { Nav, Footer, Contact, Modal } from "./components";
import "react-toastify/dist/ReactToastify.css";
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
    location.pathname === "/lessons" ||
    location.pathname === "/weeklyTime";
  const isClasses = location.pathname === "/classe";
  const isSubject = location.pathname === "/subject";
  const isLessons = location.pathname === "/lessons";
  const isWeeklyTime = location.pathname === "/weeklyTime";

  return (
    <section className="bg relative">
      {!hideNavAndFooter ? (
        <Nav />
      ) : (
        <div className="flex flex-wrap gap-x-1 md:gap-x-3 text-base md:text-lg font-semibold mb-4 p-4">
          <Link
            to="/classe"
            className={`${
              isClasses ? "text-green-500 underline" : "text-gray-500"
            }  hover:text-green-600 transition`}
          >
            الأقسام
          </Link>
          <span>/</span>
          <Link
            to="/subject"
            className={`${
              isSubject ? "text-green-500 underline" : "text-gray-500"
            } hover:text-green-600 transition`}
          >
            المواد
          </Link>
          <span>/</span>
          <Link
            to="/lessons"
            className={`${
              isLessons ? "text-green-500 underline" : "text-gray-500"
            } hover:text-green-600 transition`}
          >
            الدروس
          </Link>
          <span>/</span>
          <Link
            to="/weeklyTime"
            className={`${
              isWeeklyTime ? "text-green-500 underline" : "text-gray-500"
            } hover:text-green-600 transition`}
          >
            الوقت الاسبوعي
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
        <Route path="/weeklyTime" element={<WeeklyTime />} />
        <Route path="/modal" element={<Modal />} />
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