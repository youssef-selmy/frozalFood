import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('');
    const [error, setError] = useState('')

    // useEffect(() => {
    //     async function validate() {
    //         const data = JSON.stringify(localStorage.getItem('sec'));
    //         var myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");

    //         var raw = JSON.stringify({
    //             userName: data.userName,
    //             pass: data.pass
    //         });
    //         var requestOptions = {
    //             method: 'POST',
    //             headers: myHeaders,
    //             body: raw,
    //         };
    //         const res = await fetch("https://mix-mart.online/check", requestOptions)
    //         if (res.ok) window.location.href = '/panel'

    //     }
    //     if (localStorage.getItem('sec')) validate()
    // }, [])


    async function send() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            userName,
            pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        const res = await fetch("https://mix-mart.online/check", requestOptions)
        console.log(raw)
        if (res.ok) {
            localStorage.setItem('sec', raw)
            window.location.href = '/panel';
        }
        else setError('Wrong');
    }
    return (
        <div className='flex justify-center items-center h-screen bg-gray-50'>
            <div className='border max-w-[400px] w-full  bg-white p-5 rounded'>
                <h2 className='text-xl text-center mb-10'>Admin Login</h2>
                {error && <p className='text-center text-xl font-medium text-red-500'>{error}</p>}
                <div className='flex flex-col gap-5'>
                    <label className='flex flex-col'>
                        <span>User Name</span>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className='border p-1 outline-none rounded' />
                    </label>
                    <label className='flex flex-col'>
                        <span>Password</span>
                        <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} className='border p-1 outline-none rounded' />
                    </label>
                    <button onClick={send} type='submit' disabled={(!userName || !pass)} className={`w-full bg-main-green p-2 text-white font-medium rounded text-lg duration-300 ${(!userName || !pass) && 'bg-emerald-300 cursor-not-allowed'}`}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login