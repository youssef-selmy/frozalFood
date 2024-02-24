import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { FaTrash } from "react-icons/fa6";

const Panel = () => {
    const [selected, setSelected] = useState('allBlogs');
    const [validUser, setValidUser] = useState(false)

    useEffect(() => {
        async function validate() {
            const data = JSON.parse(localStorage.getItem('sec'));
            console.log(data)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "userName": data.userName,
                "pass": data.pass
            });
            console.log(raw)
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
            };
            const res = await fetch("https://mix-mart.online/check", requestOptions)
            if (!res.ok) window.location.href = '/login'
            else setValidUser(true)

        }
        if (localStorage.getItem('sec')) validate()
        else window.location.href = '/login'
    }, [])

    return (
        <div className='flex h-screen'>
            {validUser && (
                <>
                    <Menu setSelected={setSelected} />
                    <Main selected={selected} />
                </>
            )}
        </div>
    )
}

function Menu({ setSelected }) {
    return (
        <div className='bg-gray-100 flex flex-col justify-start w-[250px] border-r'>
            <button className='text-start p-4 border-b text-xl hover:bg-gray-300 duration-300' onClick={() => setSelected('allBlogs')}>Blogs</button>
            <button className='text-start p-4 border-b text-xl hover:bg-gray-300 duration-300' onClick={() => setSelected('createBlog')}>Create Blog</button>
        </div>
    )
}

function Main({ selected }) {
    return (
        <div className='px-5 py-20 w-full'>
            {selected === 'allBlogs' && <Blogs />}
            {selected === 'createBlog' && <AddBlog />}
        </div>
    )
}

function Blogs() {
    const [data, setData] = useState([]);

    async function getData() {
        const res = await fetch('https://mix-mart.online/froBlog');
        const info = await res.json();
        console.log(info)
        setData(info.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='flex flex-wrap items-center gap-5'>
            {data.length === 0 && <p>No Blogs...</p>}
            {data.length > 0 && data.map((ele, i) => <ProdCard key={i} ele={ele} getData={getData} />)}
        </div>
    )
}

function ProdCard({ ele, getData }) {
    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState('')

    async function remove() {
        setError('')
        console.log(ele._id)
        const res = await fetch(`https://mix-mart.online/froBlog/${ele._id}`, { method: 'DELETE' });
        if(!res.ok) return setError('Something went wrong')
        getData();
    }
    return (
        <Card className='p-2 rounded flex flex-col h-fit w-[400px] min-h-[200px] gap-5'>
            {error && <p className='text-center text-lg font-medium'>{error}</p>}
            <div>
                <img src={ele.image[0]} alt="Product" />
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-2xl'>{ele.blogName}</h3>

                    {confirm && <button onClick={remove} className=' py-1 px-5 font-medium bg-red-200 text-red-500 rounded flex justify-center items-center cursor-pointer text-sm'>
                        Are You Shore?
                    </button>}

                    {!confirm && <div onClick={() => setConfirm(true)} className='w-6 h-6 bg-red-200 text-red-500 rounded flex justify-center items-center cursor-pointer text-sm'>
                        <FaTrash />
                    </div>}
                </div>
                <span>{ele.createdAt.split('T')[0]}</span>
                <p className='text-gray-500 max-w-[300px] break-words'>{ele.description}</p>
            </div>
        </Card>
    )
}

function AddBlog() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');


    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSubmit = async (event) => {
        setError('');
        event.preventDefault();
        var formdata = new FormData();
        formdata.append("blogName", title);
        formdata.append("description", desc);
        formdata.append("image", image);

        var requestOptions = {
            method: 'POST',
            body: formdata,
        };

        const res = await fetch("https://mix-mart.online/froBlog", requestOptions);
        console.log(res.ok)
        if (res.ok) {
            setSuccess('Sent Successfuly');
            setTimeout(() => setSuccess(''), 5000)
            setTitle('');
            setDesc('');
            setImage('');
        } else setError('Something went wrong')
    };


    return (
        <div className='w-full flex justify-center'>
            <div className='text-[#333] clear-start w-full max-w-[500px]'>
                {error && <p className='text-center text-xl font-medium text-red-500'>{error}</p>}
                {success && <p className='text-center text-xl font-medium text-green-500'>{success}</p>}
                <h3 className='flex justify-center'>Create New Blog</h3>
                <div className='flex flex-col gap-5'>
                    <label className='flex flex-col gap-1'>
                        <p>Image</p>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" className='border p-1 border-[#999] rounded' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Title</p>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border p-1 border-[#999] rounded' />
                    </label>
                    <label className='flex flex-col gap-1'>
                        <p>Description</p>
                        <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className='border p-1 border-[#999] rounded h-[200px] resize-none' />
                    </label>
                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='bg-main-green rounded-xl w-full flex justify-center items-center gap-2 font-semibold py-3 text-white hover:text-main-green hover:bg-white border border-transparent hover:border-main-green duration-300'
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Panel