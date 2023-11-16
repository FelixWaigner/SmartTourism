'use client'
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PanelLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const { user } = useAuthContext() as { user: any }; // Use 'as' to assert the type as { user: any }
  const router = useRouter();

  useEffect( () => {
    // Redirect to the home page if the user is not logged in
    if ( user == null ) {
      router.push( "/" );
    }
    // }, [ user ] );
  }, [ user, router ] ); // Include 'router' in the dependency array to resolve eslint warning

    return (
      <section>
        <h1 className=" text-4xl">Panel</h1>
        {children}
      </section>
    )
  }