'use client'
import { useEffect, Suspense, useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Spinner } from "flowbite-react";


export default function PanelLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const { user } = useAuthContext() as { user: any }; // Use 'as' to assert the type as { user: any }
    const router = useRouter();
    const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect( () => {
    // Redirect to the home page if the user is not logged in
    if ( user == null ) {
      router.push( "/" );
    }
    // setLoggedIn(true)
    // }, [ user ] );
  }, [ user, router ] ); // Include 'router' in the dependency array to resolve eslint warning

  return (
    <section>
      <h1 className=" text-4xl">Panel</h1>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </section>
  )

    // if (loggedIn){
    //   return (
    //     <section>
    //       <h1 className=" text-4xl">Panel</h1>
    //       {children}
    //     </section>
    //   )
    // } else {
    //   <h1>Loading ...</h1>
    // }
  }

  function Loading() {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }