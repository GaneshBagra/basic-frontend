// src/components/Layout.tsx
import React from 'react'
import Header from '../Header'


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
        <main className="main-content" >
            {children}
        </main>
    </>
)

export default Layout