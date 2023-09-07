'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import vaniLogo from 'public/images/vani-logo.svg';
import vaniLogoActive from 'public/images/vani-logo-active.svg'
import vaniBack from 'public/images/back-icon.svg'
import { PATHNAME } from "@/constant";

const MainLayout = ({
    children,
    onClick
}: {
    children: React.ReactNode;
    onClick?: () => void
}) => {
    const pathname = usePathname();
    return (
        <div className="w-full min-h-screen">
            <header style={
                pathname !== PATHNAME.HOME ? {
                    height: '72px'
                } : {}
            }>
                {pathname === PATHNAME.HOME ? null : <Image
                    style={{
                        top: '20px',
                        left: '20px',
                        position: 'absolute',
                        cursor: 'pointer'
                    }}
                    width={16} height={30} src={vaniBack} alt="" onClick={onClick} />}
                <Image
                    width={100}
                    height={50}
                    src={pathname !== PATHNAME.HOME ? vaniLogoActive : vaniLogo}
                    alt="vani-logo"
                    style={{
                        position: 'absolute',
                        top: "20px",
                        ...pathname !== PATHNAME.HOME ? { right: '20px' } : { left: '20px' }
                    }}
                />
            </header>
            {children}
        </div >
    )
}

export default MainLayout