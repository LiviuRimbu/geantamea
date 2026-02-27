'use server'

import {prisma} from "@/shared/lib/prisma"
import {z} from "zod"


const checkoutSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(8),
    comment: z.string().optional(),
    cartItems: z.array(z.string()), 
});

export async function createOrder(data: z.infer<typeof checkoutSchema>) {
    try {
        const validatedData = checkoutSchema.parse(data);

        const newCustomer = await prisma.customer.create({
            data: {
                name: validatedData.name,
                phone: validatedData.phone,
                comment: validatedData.comment,
                cartItems: validatedData.cartItems,
                active: true,
            },
        });

        // 3. Returnăm succesul și datele noului client
        return { success: true, customer: newCustomer };

    } catch (error) {
        console.error("Order creation error:", error);
        return { success: false, error: "A apărut o eroare la procesarea comenzii." };
    }
}