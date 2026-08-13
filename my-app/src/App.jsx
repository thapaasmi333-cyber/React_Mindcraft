// //import Movies from "./components/Movies/Movies";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

// //import ShoppingList from "./components/ShoppingList/Shoppinglist";

// //import BMICal from "./components/BMICal/BMIcal";

// //import FeedbackForm from "./components/FeedbackForm/Feedbackform";

// //import RegisterForm from "./components/RegisterForm/Registerform";

// //import NamePreview from "./components/NamePreview/Namepreview";
// import Post from "./components/Post/Posts";

// //import CountDown from "./components/CountDown/Countdown";

// export default function App() {
//   return (
//     <>
//       {/* <Movies /> */}
//       {/* <NamePreview /> */}
//       {/* <RegisterForm /> */}
//       {/* <FeedbackForm /> */}
//       {/* <BMICal /> */}
//       {/* <ShoppingList /> */}
//       <Post />
//       {/* <CountDown /> */}
//     </>
//   );
// }

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}
export default App;
