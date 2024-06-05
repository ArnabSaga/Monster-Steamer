import { Outlet, Navigate } from "react-router-dom"

const Layout = () => {
    const isAuttenticated = false;

    return (
        <>
            {
                isAuttenticated ?
                    (
                        <Navigate to="/" />
                    )
                    :
                    (
                        <section>
                            <Outlet />
                        </section>
                    )
            }
        </>
    )
}

export default Layout