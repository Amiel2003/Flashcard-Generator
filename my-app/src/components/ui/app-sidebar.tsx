import { Calendar, Home, Inbox, Search, Settings, User2, ChevronUp, PenLine, WalletCards } from "lucide-react"
import { useState, useEffect } from "react"
import LoadingDots from "../../../components/Loading/loadingdots"
import { getUserCards } from "../../../functions/getUserCards"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
    SidebarSeparator,

} from "@/components/ui/sidebar"
import { signOut } from "firebase/auth"
import { auth } from "@/app/auth/firebase"
import { useRouter } from "next/navigation"

export function AppSidebar() {

    const [prompts, setPrompts] = useState([])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
        email: ""
    })
    const router = useRouter()

    const handleSignOut = async () => {
        try {
            const logout = await signOut(auth);
            console.log("User signed out successfully");
            localStorage.removeItem('token')
            router.push('/login')

        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    useEffect(() => {
        waitForPrompts()
    }, [])

    async function waitForPrompts() {
        const data = await getUserCards()
        if (data) {
            setLoading(false)
            setPrompts(data.prompts.reverse())
            setUser(data.user)
            console.log(prompts)
        }
    }


    return (
        <Sidebar>
            <SidebarContent className="bg-gray-900 p-3">
                {(!loading)
                    ? <SidebarGroup>
                        <SidebarGroupLabel className="text-zinc-50 text-lg">Your Flashcards</SidebarGroupLabel>
                        <div className="pt-3 pr-4">
                            <SidebarSeparator />
                        </div>
                        <SidebarGroupContent className="pt-7">

                            <SidebarMenu>
                                <SidebarMenuItem className="pb-4 flex">
                                    <SidebarMenuButton className="hover:bg-gray-800" asChild>
                                        <a href="/">
                                            <PenLine className="text-zinc-50" />
                                            <span className="text-zinc-50">New Prompt</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>

                                {prompts.map((prompt: any) => (
                                    <SidebarMenuItem key={prompt.prompt_id}>
                                        <SidebarMenuButton className="hover:bg-gray-800" asChild>
                                            <Link href={`/prompts/${prompt.prompt_id}/${prompt.prompt.prompt}/${prompt.prompt.difficulty}`}>
                                                <WalletCards className="text-zinc-50" />
                                                <span className="text-zinc-50">{prompt.prompt.prompt}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    : <div className="pt-[80%]"><LoadingDots /></div>}

            </SidebarContent>
            <SidebarFooter className="bg-gray-900 p-5 pb-7">

                {(!loading)
                    ? <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton className="hover:bg-gray-900 border-gray-900">
                                        <User2 color="white" size={9} /> <span className="text-zinc-50">{user?.email}</span>
                                        <ChevronUp className="ml-auto" color="white" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    side="top"
                                    className="w-[--radix-popper-anchor-width]"
                                >
                                    <DropdownMenuItem>
                                        <a onClick={handleSignOut}><span>Sign out</span></a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    : <></>}

            </SidebarFooter>        </Sidebar>
    )
}
