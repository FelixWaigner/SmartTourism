'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";


function Page(){
    // Access the user object from the authentication context
    // assert the type of the user to be any
    const { user } = useAuthContext() as { user: any };
    const router = useRouter();

    useEffect(() => {
        // Redirect to the home page if the user is not logged in
        if ( user == null ){
            router.push('/');
        }
    // Include 'router' in the dependency array to resolve eslint warning
    }, [ user, router ]);

    return (
        <h1>Only logged-in users can view this page</h1>
    );
}

export default Page;