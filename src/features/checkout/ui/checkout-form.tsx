'use client'

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
// import {useTranslations} from "next-intl";

import {z} from "zod";
import {useCartStore} from "@/features/cart";
import {FillingButton, TextElement} from "@/shared/ui";
import {Input} from "@/shared/ui/shadcn/";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/shadcn";
import {Textarea} from "@/shared/ui/shadcn/textarea";
import {createOrder} from "@/features/checkout/actions/checkout";
import {useRouter} from "next/navigation";


export const CheckoutForm = () => {

    // const t = useTranslations();
    const router = useRouter();
    const cartItems = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);
    const cartItemsIds = cartItems.map((item) => item.id);


    const formSchema = z.object({
        name: z.string().min(3, "Numele este prea scurt"),
        phone: z.string().min(8, "Numărul de telefon este obligatoriu"),
        comment: z.string(),

    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "+373",
            comment: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await createOrder({
            ...values,
            cartItems: cartItemsIds
        });
        if (result.success) {
            console.log(result.customer!.name)
            localStorage.setItem("lastOrder", JSON.stringify({
                name: result.customer!.name,
                phone: result.customer!.phone,
            }));
            clearCart();
            // router.push(`/checkout/success?name=${result.customer!.name}&phone=${result.customer!.phone}`);
            router.push(`/checkout/success`);
        } else {
            alert(result.error);
        }
    }

    return (
        <div>
            <TextElement variant="description">Date</TextElement>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Nume <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Ion" {...field} />
                                </FormControl>
                                <FormMessage className="text-black"/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Telefon <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+373 ..."
                                        {...field}
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            const cleanedValue = value.replace(/(?!^\+)\D/g, "");
                                            const truncatedValue = cleanedValue.slice(0, 12);

                                            field.onChange(truncatedValue);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage className="text-black"/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="comment"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Comment</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Comment" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FillingButton type="submit" color="black" className="w-full">Continuă</FillingButton>
                </form>
            </Form>
        </div>
    );
};
