import { useState } from "react";
import "./styles/styles.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/List/BookList";
import About from "./components/About";
import Contact from "./components/Contact";
// import ClickButton from "./components/List/ClickButton";
// import FruitList from "./components/List/FruitList";
// import Services from "./components/Services";
// import Produk from "./components/Produk";

// let array = [ 1, 2, 3];
// console.log(...array)

// let originalArray = [1, 2, 3];
// let copiedArray = [...originalArray];

// copiedArray.push(4);
// console.log(originalArray)
// console.log(copiedArray)

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <BookList />;
    if (page === "about") return <About />;
    if (page === "contact") return <Contact />;
  };

  return (
    <>
      <Header setPage={setPage} />

      {renderPage()}

      <Footer />
    </>
  );
}

// export default App;
// function App() {
//   return (
//     <>
//       <Header />
//       <BookList />
//       <About />
//       <Contact />
//       <Footer />
//       {/* <Produk/> */}
//       {/* <ClickButton/> */}
//       {/* <FruitList /> */}
//       {/* <Services /> */}

//     </>
//   );
// }

export default App;