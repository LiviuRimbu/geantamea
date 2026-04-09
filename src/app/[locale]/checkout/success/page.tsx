'use client'

import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";

import {FillingButton, TextElement} from "@/shared/ui";
// import {OrderSummary} from "@/features/checkout";

export default function SuccessPage() {

    const t = useTranslations('success-page')
    const router = useRouter()
    const [customer, setCustomer] = useState<{ name: string, phone: string } | null>(null)

    useEffect(() => {
        const data = localStorage.getItem("lastOrder")
        if (!data) {
            router.push('/')
            return
        }
        setCustomer(JSON.parse(data))
        // localStorage.removeItem("lastOrder")
    }, [])
    if (!customer) return null

    return (
        <div className="flex flex-col lg:flex-row justify-center h-[70vh] borderw-full overflow-x-hidden px-4">
            <div className="flex flex-col items-center">
                {/*Text*/}
                <div className="w-full max-w-[1600px] text-start mt-7">
                    <TextElement variant="subtitle"
                                 className="normal-case whitespace-normal"> {t("text-1")} {customer.name}! </TextElement>
                    <TextElement variant="subtitle"
                                 className="normal-case whitespace-normal mt-4"> {t("text-2")}  </TextElement>
                    <TextElement variant="subtitle"
                                 className="normal-case whitespace-normal mt-4"> {t("text-3")} {customer.phone} </TextElement>
                    <TextElement variant="subtitle"
                                 className="normal-case whitespace-normal mt-5"> {t("text-4")}  </TextElement>


                </div>

                {/*Buttons*/}
                <div className="flex flex-col lg:flex-row gap-7 mt-5 p-3">

                    <FillingButton color="black" className="" onClickAction={() => {
                        localStorage.removeItem("lastOrder");
                        router.push('/')
                    }}>
                        {t("home-btn")}
                    </FillingButton>

                    <FillingButton color="white" className="" onClickAction={() => {
                        // localStorage.removeItem("lastOrder");
                        router.push('/shipping')
                    }}>
                        {t('shipping-btn')}
                    </FillingButton>
                </div>
            </div>
            {/*<div>*/}
            {/*    <OrderSummary />*/}
            {/*</div>*/}

        </div>
    )
}