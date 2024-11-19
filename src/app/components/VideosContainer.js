export default function VideosContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-16 md:px-24 mt-20">
      <div className="">
        <iframe
          width="498"
          height="280"
          className=""
          src="https://www.youtube.com/embed/DA_hptqQZoo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      </div>
      <div className="">
        <iframe
          className=""
          width="498"
          height="280"
          src="https://www.youtube.com/embed/WgWtMhTitvE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      </div>
      <div>
        <iframe
          width="498"
          height="280"
          src="https://www.youtube.com/embed/PreNRjJERbo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      </div>
      <div className="">
        <iframe
          className=""
          width="498"
          height="280"
          src="https://www.youtube.com/embed/PreNRjJERbo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      </div>
      {/* Add more videos as needed */}
    </div>
  );
}
