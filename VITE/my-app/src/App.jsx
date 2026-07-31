import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Navbar />

        <search className="flex-1 flex items-center justify-center">
          <h2 className="text-3x1 text-center mt-10">
            Welcome to My YT Channel
          </h2>
        </search>
        <Footer />
      </main>
    </>
  );
}
