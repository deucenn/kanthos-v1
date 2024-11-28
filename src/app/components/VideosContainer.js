export default function VideosContainer() {
  return (
    <div className="max-w-7xl mx-auto p-6 font-lamebrains">
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-400">
        Our Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-slate border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-200 p-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/DA_hptqQZoo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video 1"
            className="rounded-lg"
          />
        </div>
        <div className="bg-slate border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-200 p-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/WgWtMhTitvE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video 2"
            className="rounded-lg"
          />
        </div>
        <div className="bg-slate border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-200 p-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/PreNRjJERbo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video 3"
            className="rounded-lg"
          />
        </div>
        {/* Add more videos as needed */}
      </div>
    </div>
  );
}

