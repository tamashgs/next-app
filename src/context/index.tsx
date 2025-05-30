/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Item } from "@/app/types";
import { createContext, useState } from "react";

export const AppContext = createContext<{cart: Item[], setCart: any, addItem: any}>({ cart: [],  setCart: () => {}, addItem: () => {} });

export const AppProvider = ({ children }: { children: any }) => {
    const [cart, setCart] = useState<Item[]>([]);

    const addItem = (item: any) => {
        setCart((prevCart: Item[]) => {
            const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
            if (existingItemIndex > -1) {
                // Update quantity if item already exists
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += item.quantity;
                return updatedCart;
            }
            // Add new item to cart
            return [...prevCart, { ...item, quantity: item.quantity || 1 }];
        });
    }

    return <AppContext.Provider value={{ cart, setCart, addItem }}>{children}</AppContext.Provider>;
};