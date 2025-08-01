"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"

export type Employee = {
    id: number
    firstName: string
    lastName: string
    teamName: string
    isTeamLeader: boolean
    avatar?: string
}

export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "avatar",
        header: "",
        cell: ({ row }) => {
            return <Avatar>
                <AvatarImage src={row.original.avatar} />
                <AvatarFallback>
                    {row.original.firstName.charAt(0)}{row.original.lastName.charAt(0)}
                </AvatarFallback>
            </Avatar>
        }
    },
    {
        accessorKey: "firstName",
        header: "First name",
    },
    {
        accessorKey: "lastName",
        header: "Last name",
    },
    {
        accessorKey: "teamName",
        header: "Team",
    },
    {
        accessorKey: "isTeamLeader",
        header: "",
        cell: ({ row }) => {
            return row.original.isTeamLeader && <Badge variant="default" className="bg-green-600 text-white">Team Leader</Badge>
        }
    },
]