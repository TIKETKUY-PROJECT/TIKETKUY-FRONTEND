"use client";
import axios from "axios";
import { useState } from "react";
import { useCurrentUser } from "@/app/_components";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useCurrentUser();

    const login = async () => {
        await axios
            .post(
                process.env.NEXT_PUBLIC_BACKEND_URL + "authentication/login",
                {
                    email: email,
                    password: password,
                }
            )
            .then((res) => {
                setCurrentUser(
                    res.data.data.accessToken,
                    res.data.data.refreshToken
                );
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <>
            <main>
                <div className="flex gap-2 py-2" style={{ color: "white" }}>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                        id="emailField"
                        onChange={(event) => {
                            event.preventDefault();
                            setEmail(event.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs"
                        id="passwordField"
                        onChange={(event) => {
                            event.preventDefault();
                            setPassword(event.currentTarget.value);
                        }}
                    />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={login}
                    >
                        submit
                    </button>
                </div>
            </main>
        </>
    );
}
