import VideosContainer from "../components/VideosContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function VideosPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <VideosContainer />
      <Footer />
    </div>
  );
}
