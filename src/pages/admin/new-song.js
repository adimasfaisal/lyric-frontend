import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useFormik } from 'formik';
import { useState, useEffect, useMemo } from "react";
import axios from 'axios';

import { CKEditor, CKEditorAction } from "ckeditor4-react";
import Swal from "sweetalert2";

const NewSong = () => {
    const [data, setData] = useState({});

    const formik = useFormik({
        initialValues: {
            title: '',
            artist: '',
            album: '',
            cover: '',
            lyrics: '',
        },
        onSubmit: values => {
            Swal.fire({
                title: "Add New Song's Lyrics",
                text: "Are you sure want to add this song's lyrics?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    alert(JSON.stringify(values, null, 2));
                    axios.post('http://localhost:3001/api/post', {
                        title: formik.values.title,
                        artist: formik.values.artist,
                        album: formik.values.album,
                        cover: formik.values.cover,
                        lyrics: formik.values.lyrics,
                    })
                        .then(res => {
                            Swal.fire({
                                title: 'Success',
                                text: 'Song\'s Lyrics has been added',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            }).then(() => {
                                window.location.href = '/admin/dashboard';
                            }
                            )
                        })
                        .catch(err => {
                            Swal.fire({
                                title: 'Error',
                                text: 'Something went wrong',
                                icon: 'error',
                                confirmButtonText: 'OK'
                            })
                        });
                }
            })

            // formik.resetForm();
        },
    });

    const handleInstanceReady = ({ editor }) => {
        // Will be triggered only once, when editor is ready for interaction.
        console.log(editor);
    };

    return (
        <div className="flex flex-col h-screen justify-between" >
            <Navbar />
            <div className="flex-grow p-10 bg-gray-200">
                <div className="p-10 shadow-xl w-3/5 mx-auto bg-white rounded">
                    <div className="m-5">
                        <h1 className="text-5xl font-semibold mb-5 text-center text-gray-900">
                            Create New Song's Lyrics
                        </h1>
                        <hr />
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artist">
                                Artist
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="artist"
                                type="text"
                                placeholder="Artist"
                                value={formik.values.artist}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="album">
                                Album
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="album"
                                type="text"
                                placeholder="Album"
                                value={formik.values.album}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover">
                                Cover Image
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cover"
                                type="text"
                                placeholder="Insert image URL"
                                value={formik.values.cover}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lyrics">
                                Song's Lyrics
                            </label>
                            <CKEditor
                                id="lyrics"
                                initData={formik.values.lyrics}
                                onChange={(event) => {
                                    formik.setFieldValue('lyrics', event.editor.getData());
                                }}
                            />
                        </div>

                        <button type="submit" className="bg-gray-500 text-white uppercase p-2 rounded w-6/12 mx-auto hover:bg-gray-700" >Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default NewSong;