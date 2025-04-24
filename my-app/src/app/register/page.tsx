'use client'

import React, { useState, useEffect } from "react"
import { showToast } from "../../../functions/toast"
import { register } from "./register"
import { getUserFromBackend } from "../auth/getUser"
import { useRouter } from "next/navigation"
import { LoaderCircle } from "lucide-react"

export default function RegisterPage() {

    const [loading, setLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirm_password: ""
    })
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            if (credentials.email.trim() == "" || credentials.confirm_password.trim() == "" || credentials.password.trim() == "") {
                showToast("Complete the form, whitespaces are invalid", "error")
                setLoading(false)
            } else {
                console.log(credentials)
                if (credentials.confirm_password === credentials.password) {
                    const idToken = await register(credentials.email, credentials.password)
                    if (idToken) {

                        // gets user from the backend and verifies the token from firebase
                        const user = await getUserFromBackend(idToken)

                        if (user) {
                            showToast("Registered successfully", "success")
                            localStorage.setItem("token", idToken)
                            router.push('/')
                        }

                    } else {
                        showToast("No token received", "error")
                        setLoading(false)
                    }
                } else {
                    showToast("Confirm password does not match", "error")
                    setLoading(false)
                }
            }

        } catch (error) {
            console.error("Error registering account: ", error)
            showToast("Couldn't create your account, please try again", "error")
            setLoading(false)
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-950 h-max min-h-[100vh] pb-5">
            <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">


                <div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
                    <p className="text-[32px] font-bold text-white">Create your Flash<span className="text-blue-300">Account</span></p>
                    <p className="mb-2.5 mt-2.5 font-normal text-zinc-400">
                        Enter your email and password to register!
                    </p>

                    <form noValidate className="mb-4" onSubmit={handleSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <label className="text-white" htmlFor="email">Email</label>
                                <input
                                    required
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
                                <label className="text-zinc-50 mt-2 dark:text-white" htmlFor="password">Password</label>
                                <input
                                    required
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    onChange={handleInputChange}
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                                />
                                <label className="text-zinc-50 mt-2 dark:text-white" htmlFor="password">Confirm Password</label>

                                <input
                                    required
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    placeholder="Confirm Password"
                                    autoComplete="current-password"
                                    onChange={handleInputChange}
                                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                                />
                            </div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                            >
                                {(loading) ? <LoaderCircle className="animate-spin" /> : "Create Account"}
                            </button>

                            <span className="text-xs text-zinc-50 mx-auto">
                                Already have an account?
                                <a href="/login" className="mx-auto">
                                    <span className="text-blue-400 text-xs"> Sign in </span>
                                </a>
                                now
                            </span>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}