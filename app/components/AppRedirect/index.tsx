"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface IAppRedirectProps {
    path?: string
}
const AppRedirect = ({ path='/pickerPage' }: IAppRedirectProps) => {
    const router = useRouter();
    useEffect(() => {
        router.push(path);
    }, []);
    return <></>;
};

export default AppRedirect;