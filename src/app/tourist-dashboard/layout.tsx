import Menu from "@/components/navigation/menu";


export default function Layout({   children,
}: {
  children: React.ReactNode
}) {
    return (
      <>
        <main>{children}</main>

        <Menu />
      </>
    )
  }