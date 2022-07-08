import Header from "./Header/Header"
import { FC, ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout