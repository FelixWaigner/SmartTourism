'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebase_app from "@/firebase/firebase";

// initialize firebase auth instance
const auth = getAuth( firebase_app );

// create the authentication context
export const AuthContext = createContext( {} );

// hook to access the authentication context
export const useAuthContext = () => useContext( AuthContext );

interface AuthContextProvideProps {
    children: ReactNode;
}

export function AuthContextProvider( { children }: AuthContextProvideProps ): React.ReactNode {
    // set up state to track the authenticated user and loading status
    const [ user, setUser ] = useState<User | null>( null );
    const [ loading, setLoading ] = useState( true );

    useEffect( () => {
        // subscribe to the authentication state changes
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
            if ( user ){
                // user is signed in
                setUser( user );
            } else {
                // user is signed out
                setUser( null );
            }
            // set the loading to false once authentication state is determined
            setLoading( false );
        });

        // unsubscribe from the authentication state changes when the component is unmounted
        return () => unsubscribe();
    }, [] );

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    )
}


