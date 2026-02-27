'use client'

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Button} from "@/shared/ui/shadcn";
import {FillingButton, TextElement} from "@/shared/ui";

export default function SuccessPage() {

    const router = useRouter()
    const [customer, setCustomer] = useState<{ name: string, phone: string } | null>(null)

    useEffect(() => {
        const data = localStorage.getItem("lastOrder")
        if (!data) {
            router.push('/')
            return
        }
        setCustomer(JSON.parse(data))


    }, [])

    if (!customer) return null
    // console.log(customer!.name)
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                Thanks {customer.name}!!!! Your phone {customer.phone}</div>
            <FillingButton color="black" className="w-[200px]" onClickAction={() => {
                localStorage.removeItem("lastOrder");
                router.push('/')
            }}>
                <TextElement>To homepage</TextElement>
            </FillingButton>

        </div>
    )
}