'use client';
import{ ChangeEvent, FormEvent, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const defaultFormData = { email: '', name: '', password: '' }

const Auth = () => {
    const[formData, setFormData] = useState(defaultFormData)
    const inputStyles = 'border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none'
    const handledInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try{
            console.log(formData)
        } catch(error){
            console.log(error)
        } finally{
            setFormData(defaultFormData)
        }
    }

    return(
        <section className="container mx-auto">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Create account
                    </h1>
                    <p>Or</p>
                    <span className="inline-flex items-center">
                        <AiFillGithub className='mr-3 text-4xl cursos-pointer text-black dark:text-white'/>
                        |
                        <FcGoogle className='ml-3 text-4xl cursos-pointer'/>
                    </span>
                </div>
                <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder='name@company.com' 
                        required 
                        className={inputStyles} 
                        value={formData.email}
                        onChange={handledInputChange}
                    />
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder='John Doe' 
                        required 
                        className={inputStyles} 
                        value={formData.name}
                        onChange={handledInputChange}

                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='password' 
                        required minLength={6} 
                        className={inputStyles} 
                        value={formData.password}
                        onChange={handledInputChange}

                    />

                    <button type="submit" className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                        Sing UP
                    </button>
                </form>
                <button className='text-blue-700 underline'>
                    Login
                </button>
            </div>
        </section>
    )
}

export default Auth