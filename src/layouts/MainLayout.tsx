'use client'

import { IconVani } from "@/components/shared";
import { PATHNAME } from "@/constant";
import { usePathname } from "next/navigation";

const MainLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    return (
        <div className="w-full min-h-screen">
            <IconVani color={pathname === PATHNAME.QUIZ ? '#5818C6' : 'white'} className="absolute top-5 left-5 w-5 h-5" />
            {children}
        </div>
    )
}

export default MainLayout