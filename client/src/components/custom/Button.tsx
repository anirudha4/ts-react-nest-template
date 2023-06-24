import { HTMLAttributes } from "react"
import { cva } from "class-variance-authority"
import classNames from "classnames"
// 
import { mergeClasses } from "@utils"

const button = cva(['px-5 font-medium', 'outline-none'], {
    variants: {
        intent: {
            primary: [
                'bg-primary text-primary-foreground'
            ],
            secondary: [],
            destructive: []
        },
        size: {
            sm: ['h-8'],
            md: ['h-10'],
            lg: ['h-12'],
        },
        rounded: {
            sm: ['rounded'],
            md: ['rounded-md'],
            lg: ['rounded-lg'],
            full: ['rounded-full']
        }
    }
})

// types and interfaces
export type measure = 'sm' | 'md' | 'lg';
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'destructive'
    size?: measure
    rounded?: measure | 'full'
}

const Button = ({ size = 'md', variant = 'primary', rounded = 'md', className, children }: Props) => {
    return (
        <button
            className={mergeClasses(
                classNames(button({ className, size, intent: variant, rounded }))
            )}
        >
            {children}
        </button>
    )
}

export default Button;