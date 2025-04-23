'use client'

import { useState, useEffect } from "react"
import { login } from "./login"
import axios from "axios"
import { showToast } from "../../../functions/toast"
import { useRouter } from "next/navigation"

export default function Login() {

    const [verifying, setVerifying] = useState(true)
    const [mounted, setMounted] = useState(false)
    const router = useRouter()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {

            const token = await login(credentials.email, credentials.password)

            if (token) {
                const response = await axios.get("http://localhost:5000/api/auth", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })

                const user = response.data.user

                if (user) {
                    console.log(response.data.user)

                    localStorage.setItem("token", token)
                    showToast("Logged In!", "success")
                    setTimeout(() => { }, 1000)
                    router.push('/')
                }

            } else {
                console.log("No token found")
                showToast("No token found", "error")
            }

        } catch (error) {
            showToast("Invalid Credentials", "error")
        }
    }

    useEffect(() => {
        setMounted(true)
        // verifyer()
    }, [])

    if (!mounted) return null

    return (
        <div className="flex flex-col justify-center items-center bg-gray-950 h-max min-h-[100vh] pb-5">
            <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">


                <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                    <p className="text-[32px] font-bold text-white">Sign In to Flash<span className="text-blue-300">Ai</span></p>
                    <p className="mb-2.5 mt-2.5 font-normal text-zinc-400">
                        Enter your email and password to sign in!
                    </p>

                    <form noValidate className="mb-4" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <label className="text-white" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    onChange={handleInputChange}
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                                />
                                <label className="text-zinc-950 mt-2 dark:text-white" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    onChange={handleInputChange}
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                                />
                            </div>
                            <button
                                type="submit"
                                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}