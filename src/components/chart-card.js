export default function ChartCard({ song, index }) {
    return (
        <a href={`/song/${song._id}`}>
            <div className="flex items-center space-x-4 shadow-md bg-white p-3 rounded-md m-2 hover:w-full hover:bg-gray-200 transition duration-600 ease-in-out">
                <div className="flex-shrink-0">
                    <img className="w-16 h-16 rounded-full" src={song.cover} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate">
                        {song.title}
                    </p>
                    <p className="text-gray-500 truncate">
                        {song.artist}
                    </p>
                </div>
                <div className="inline-flex items-center text-3xl font-bold text-gray-900">
                    #{index + 1}
                </div>
            </div>
        </a>
    );
}