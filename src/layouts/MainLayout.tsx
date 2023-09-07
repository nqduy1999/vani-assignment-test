'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import vaniLogo from 'public/images/vani-logo.svg';
import vaniLogoActive from 'public/images/vani-logo-active.svg'
import vaniBack from 'public/images/back-icon.svg'
import { NAME_BY_PATHNAME, PATHNAME } from "@/constant";
import { useMemo } from "react";

const MainLayout = ({
    children,
    onClick
}: {
    children: React.ReactNode;
    onClick?: () => void
}) => {
    const pathname = usePathname();

    const isHome = useMemo(() => pathname === PATHNAME.HOME, [pathname])
    return (
        <div className="w-full min-h-screen">
            <div className="flex items-center justify-center" style={
                isHome ? {} : { height: '7vh' }
            }>
                {isHome ? null : <Image
                    style={{
                        top: '24px',
                        left: '16px',
                        position: 'absolute',
                        cursor: 'pointer'
                    }}
                    width={12} height={24} src={vaniBack} alt="" onClick={onClick} />}
                {isHome ? null : <p style={{ fontWeight: '700', fontSize: '20px', color: '#333333', textTransform: 'uppercase', marginRight: '24px', marginTop: '16px' }}>{NAME_BY_PATHNAME[pathname as string]}</p>}
                <Image
                    width={80}
                    height={50}
                    src={isHome ? vaniLogo : vaniLogoActive}
                    alt="vani-logo"
                    style={{
                        position: 'absolute',
                        top: "20px",
                        ...isHome ? { left: '20px' } : { right: '20px' }
                    }}
                />
            </div>
            {children}
        </div >
    )
}

export default MainLayout