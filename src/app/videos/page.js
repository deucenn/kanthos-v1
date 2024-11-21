import VideosContainer from "../components/VideosContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className=" w-full py-4">
        <Navbar />
      </header>

      {/* VideosContainer */}
      <main className="flex-grow  py-8">
        <VideosContainer />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <Footer />
      </footer>
    </div>
  );
}
