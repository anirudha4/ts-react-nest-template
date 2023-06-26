import { HTMLAttributes, ReactNode } from "react"
import { cva } from "class-variance-authority"
import classNames from "classnames"
// 
import { mergeClasses } from "@utils"
import { measure } from "@types"

const button = cva(['px-5 font-medium outline-none cursor-pointer duration-200'], {
    variants: {
        intent: {
            primary: [
                'bg-primary text-primary-foreground hover:bg-primary-dark'
            ],
            secondary: ['bg-secondary text-secondary-foreground hover:bg-accent'],
            destructive: ['bg-destructive text-destructive-foreground'],
            outline: ['bg-secondary border border-accent text-secondary-foreground hover:bg-accent'],
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
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline'
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