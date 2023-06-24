import { nanoid } from "@reduxjs/toolkit"
import { twMerge } from "tailwind-merge"

type option = {
    id: string,
    label: string,
    value: string
}
export const makeOption = (label: string, value: string): option => ({ id: nanoid(), label, value })

export const mergeClasses = (className: string | undefined) => twMerge(className);