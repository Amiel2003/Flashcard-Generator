"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const excludedRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldHideLayout = excludedRoutes.includes(pathname);

    if (shouldHideLayout) return <>{children}</>

    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full flex-grow">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </SidebarProvider>
        </>
    );
}
