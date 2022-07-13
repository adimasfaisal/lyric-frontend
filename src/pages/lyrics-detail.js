import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SongCard from '../components/song-card';
import Plyr from 'plyr-react';
import "plyr-react/plyr.css";
import { BiAlbum } from 'react-icons/bi';
import { IoMdMicrophone } from 'react-icons/io';


export default function LyricsDetail({ }) {
    const params = useParams();
    const [song, setSong] = useState({});

    const [recom, setRecom] = useState([]);

    const videoSrc = {
        type: "video",
        sources: [
            {
                src: "ePxKxx4KFQU",
                provider: "youtube"
            }
        ]
    };

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/getOne/${params.uid}`)
            .then(res => setSong(res.data));
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/artist/${song.artist}`)
            .then(res => setRecom(res.data));
    }, [song]);

    return (
        <div className='flex flex-col h-screen justify-between'>
            <Navbar />
            <div className="bg-gray-900 p-12 text-white flex flex-row">
                <div className='w-4/12 pl-32'>
                    <img src={song.cover} className="w-full" />
                </div>
                <div className='w-4/12 flex flex-col p-5 pl-12'>
                    <div>
                        <h1 className="text-3xl font-semibold mb-5">
                            {song.title}
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-gray-500 flex flex-row my-2">
                            <span className='text-2xl mr-4 text-white'>
                                <IoMdMicrophone />
                            </span>
                            {song.artist}
                        </p>
                        <p className='flex flex-row text-gray-500 my-2'>
                            <span className='text-2xl mr-4 text-white'>
                                <BiAlbum />
                            </span>
                            {song.album}
                        </p>
                        <p className='mt-5 text-sm text-gray-400 italic'>
                            "The night is young and it's wild
                            I'm running free like a child
                            On the crown of a mountain and I could keep goin' for miles"
                        </p>
                    </div>
                </div>
                <div className='w-4/12 p-5'>
                    <h1 className="text-xl font-semibold mb-5">
                        Video
                    </h1>
                    <div>
                        <Plyr source={videoSrc} />
                    </div>
                </div>
            </div>
            <div className='flex xl:flex-row p-16'>
                <div className='w-9/12 xl:pl-16'>
                    <div dangerouslySetInnerHTML={{ __html: song.lyrics }} />
                </div>
                <div className='w-4/12 border-2 p-5 rounded'>
                    <h2 className='font-bold text-3xl text-center m-4 mb-10'>
                        Recommendations
                        <br />
                        <span className='text-base font-normal'>
                            Find more songs by {song.artist}
                        </span>
                    </h2>
                    {recom.map(item => (
                        <div className="m-2 basis-4/12" key={item._id}>
                            <SongCard key={item._id} song={item} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}