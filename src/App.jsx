import {
  Home,
  About,
  Courses,
  Time,
  Login,
  Dashboard,
  Classes,
  Subject,
} from "./pages";
import { Nav, Footer, Contact } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  // Display Nav and Footer only if the path is not '/dashboard' and not '/login'

  return (
    <section className="bg relative">
      <Nav />

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
      </Routes>

      <Footer />
    </section>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
