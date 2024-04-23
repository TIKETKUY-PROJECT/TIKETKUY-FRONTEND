"use client";
import { useCurrentUser } from "@/app/_components";
import axios from "axios";
import { useRouter } from "next/router";

export default async function LogoutPage() {
    const { accessToken: at, removeCurrentUser } = useCurrentUser();
    const router = useRouter();
    const logout = async () => {
        await axios
            .post(
                process.env.NEXT_PUBLIC_BACKEND_URL + "authentication/logout",
                {},
                {
                    headers: {
                        Authorization: at,
                    },
                }
            )
            .then(() => {
                removeCurrentUser();
                router.push("authentication/login");
            })
            .catch(() => {
                removeCurrentUser();
                router.push("authentication/login");
            });
    };
    await logout();

    return <></>;
}
