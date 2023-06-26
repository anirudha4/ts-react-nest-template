import { measure } from "@types"
import { cva } from "class-variance-authority"
import classNames from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

const field = cva(classNames(
    "relative flex flex-col justify-around border border-2 focus-within:border-primary rounded-md",
    "px-2 group duration-100 transition-all"
), {
    variants: {
        intent: {
            contained: [''],
            uncontained: []
        },
        size: {
            sm: ['h-12'],
            md: ['h-14'],
            lg: ['h-16']
        }
    }
});


type fieldVariants = 'contained' | 'uncontained'

// interface Props extends Omit<HTMLInputElement, 'size'> {
interface Props extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'measure' | 'size'> {
    size?: measure,
    variant?: fieldVariants,
    label?: string
}

const Field = ({ className, variant = 'contained', size = 'md', name, id, label, ...props }: Props) => {
    const isContainedField = variant === 'contained';
    return (
        <div
            className={classNames(
                field({ className, intent: variant, size })
            )}
        >
            {isContainedField && (
                <label
                    htmlFor={id}
                    className={classNames(
                        "text-xs text-muted-foreground block pt-1 group-focus-within:text-primary-dark"
                    )}
                >
                    {label}
                </label>
            )}

            <input className="outline-none block h-full text-accent-foreground" name={name} id={id} {...props} />
        </div>
    )
}
export default Field