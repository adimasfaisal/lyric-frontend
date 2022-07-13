export default function SongCard({ song }) {
    return (
        <a href={`/song/${song._id}`}>
            <div className={"sm:max-w-sm lg:max-w-lg xl:max-w-xl bg-white shadow-lg rounded-lg overflow-hidden my-4 hover:shadow-2xl hover:-translate-y-6 transition duration-600 ease-in-out"}>
                <img className={"w-full h-56 object-cover object-center"} src={song.cover} />
                <div className={"flex items-center px-6 py-3 bg-gray-800"}>
                    <svg className={"h-6 w-6 text-white fill-current"} viewBox={"0 0 512 512"}>
                        <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                    </svg>
                    <h1 className={"mx-3 text-white font-semibold text-lg"}>{song.artist}</h1>
                </div>
                <div className={"py-4 px-6"}>
                    <h1 className={"text-2xl font-semibold text-gray-800"}>{song.title}</h1>
                    <div className={"flex items-center mt-4 text-gray-700"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 14c2.213 0 4-1.787 4-4s-1.787-4-4-4-4 1.787-4 4 1.787 4 4 4zm0-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                            </g>
                        </svg>
                        <h1 className={"px-2 text-sm"}>{song.album}</h1>
                    </div >
                </div >
            </div >
        </a >
    );
}