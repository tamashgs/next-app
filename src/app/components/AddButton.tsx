/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {  useContext } from "react";
import { AppContext } from "@/context";

export default function AddButton({ item }: Readonly<{ item: any }>) {
  const { addItem } = useContext(AppContext);  

  return <button className="btn btn-primary" onClick={() => addItem(item)}>Add to Cart</button>;
}