"use client";

import { motion } from "framer-motion";

const PageTransition = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={className}
    >
        {children}
    </motion.div>
);

export default PageTransition;


//     <motion.div
//     key={router.route}
//     initial="initial"
//     animate="animate"
//     variants={{
//         initial: {
//             opacity: 0,
//         },
//         animate: {
//             opacity: 1,
//         },
//     }}
// >