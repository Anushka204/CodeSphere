import { Sidebar } from "lucide-react"
import React from "react"
export default function PlaygroundLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return(
        <Sidebar>{children}</Sidebar>
    )
}