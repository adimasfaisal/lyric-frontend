import Sidebar from "../../components/admin/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export default function Dashboard() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    const addNew = () => {
        navigate('/admin/songs/add')
    }

    const handleRemove = (id) => {
        console.log(id)
        Swal.fire({
            title: `Are you sure?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                axios.delete(`http://localhost:3001/api/delete/${id}`)
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        window.location.reload();
                    }).catch(err => {
                        console.log(err);
                    }
                    )
            }
        })
    }

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/getAll")
            .then(res => setData(res.data));
    }, []);

    return (
        <div className="p-10">
            <button onClick={addNew} className="bg-gray-900 text-white p-3 rounded">
                Create New Song's Lyrics
            </button>
            <div>
                {data.map(item => (
                    <div className="basis-1/4 m-2" key={item._id}>
                        <button onClick={() => { handleRemove(item._id) }}>
                            <h1>{item.title}</h1>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}