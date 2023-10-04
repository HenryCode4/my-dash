import { FileStack, FileText, Folder, Hammer, LayoutDashboard, MousePointerClick, ShieldCheck, Timer, Unplug } from "lucide-react" 




export const overView = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/"
    },

    {
        label: "Queue",
        icon: Timer,
        href: "/queue"
    }
]


export const workSpace = [
    {
        label: "Projects",
        icon: Folder,
        href: "/projects"
    },
    {
        label: "Documents",
        icon: FileText,
        href: "/document"
    }
]
export const tools = [
    {
        label: "All Tools",
        icon: Hammer,
        href: "/tool"
    },
    {
        label: "Bulk Generation",
        icon: FileStack,
        href: "/generate"
    },
    {
        label: "Serap Analysis",
        icon: ShieldCheck,
        href: "/analysis"
    }
]

export const integration = [
    {
    label: "Integration",
    icon: Unplug,
    href: '/integration'
}
]

export const dashTwoItems = [
    {
        id: 1,
        label: "1-Click blog post",
        icon: MousePointerClick,
        article: 'Create a single blog post without any complicated configurations'
    },
    {
        id: 2,
        label: "Generate blog post in bulk",
        icon: FileStack,
        article: "Generate up to 1000 blog post at once with our blog generation tool"
    },
    {
        id: 3,
        label: "Serap Analysis",
        icon: ShieldCheck,
        article: 'Analyze top 10 SERP result from any giving word in any country '
    }
]
export const dashOneItems = [
    {
        label: "Projects",
        icon: Folder,
        number: 10
    },
    {
        label: "Documents",
        icon: FileText,
        number: 36
    },
    {
        label: "Integration",
        icon: Unplug,
        number: 3
    },
    {
        label: "Serap Analysis",
        icon: ShieldCheck,
        number: 17
    }
]
