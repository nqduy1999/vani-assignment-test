"use client";
/** Config Query Provider */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [client] = useState(new QueryClient());


    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}