import { useState } from "react";

export const useCurrentUser = () => {
    const [accessToken, setAccessToken] = useState("");
    const [refreshToken, setRefreshToken] = useState("");

    const setCurrentUser = (at: string, rt: string) => {
        setAccessToken(at);
        setRefreshToken(rt);
        localStorage.set("accessToken", at);
        localStorage.set("refreshToken", rt);
    };

    const removeCurrentUser = () => {
        setAccessToken("");
        setRefreshToken("");
        localStorage.remove("accessToken");
        localStorage.remove("refreshToken");
    };

    return { accessToken, refreshToken, setCurrentUser, removeCurrentUser };
};
