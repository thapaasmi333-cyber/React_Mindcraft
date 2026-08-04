// // import Footer from "./components/footer";
// // import Navbar from "./components/navbar";

import Colourbutton from "./components/ColorButton/Colorbutton";
import Counter from "./components/counter/Button";

// // export default function App() {
// //   return (
// //     <>
// //       <main className="min-h-screen flex flex-col">
// //         <Navbar />

// //         <search className="flex-1 flex items-center justify-center">
// //           <h2 className="text-3x1 text-center mt-10">
// //             Welcome to My YT Channel
// //           </h2>
// //         </search>
// //         <Footer />
// //       </main>
// //     </>
// //   );
// // }

// // import SchoolCard from "./components/SchoolCard/SchoolCard";
// // import BookCard from "./components/BookCard/BookCard";
// import BookStore from "./components/Bookstore/Bookstore";
// import Counter from "./components/counter/Button";

// function App() {
//   // The data lives HERE, at the top level
//   // const school = {
//   //   name: "Mindcraft High School",
//   //   students: [
//   //     { id: 1, name: "Asmi", grade: "A", age: 21 },
//   //     { id: 2, name: "Sudeshna", grade: "A", age: 20 },
//   //     { id: 3, name: "MUhahahahah", grade: "A-", age: 100 },
//   //   ],
//   // };

//   // return (
//   //   <div>
//   //     <h1>Welcome to the School Portal</h1>
//   //     {/* Level 0 ➜ Level 1: pass the whole school object */}
//   //     <SchoolCard school={school} />
//   //   </div>
//   // );
//   const storeData = {
//     store: "MY Book Store",
//     books: [
//       { id: 1, title: "Lord of Rings", author: "asmi", price: 1200 },
//       { id: 2, title: "Nepali", author: "asmi", price: 2200 },
//       { id: 3, title: "Hulk", author: "asmi", price: 3200 },
//       { id: 4, title: "Spiderman", author: "asmi", price: 4200 },
//     ],
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Passing the entire store object down to Level 1 */}
//       <BookStore store={storeData} />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <>
      <Counter />
      <Colourbutton />
    </>
  );
}
