import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react"
import { measure } from "@types"
import { cva } from "class-variance-authority"
import classNames from "classnames"
import { FieldError } from "react-hook-form";
import { BiError } from "react-icons/bi";
import { mergeClasses } from "@utils";

const field = cva(classNames(
    "relative flex flex-col justify-around border focus-within:border-primary rounded-md",
    "group duration-100 transition-all overflow-hidden"
), {
    variants: {
        intent: {
            contained: [''],
            uncontained: ['px-3']
        },
        size: {
            sm: ['h-12'],
            md: ['h-14'],
            lg: ['h-16']
        }
    }
});


type fieldVariants = 'contained' | 'uncontained'

interface Props extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'measure' | 'size'> {
    size?: measure,
    variant?: fieldVariants,
    label?: string,
    error?: FieldError
}

const Field = forwardRef<HTMLInputElement, Props>(({ className, variant = 'contained', size = 'md', name, id, label, error, ...props }: Props, ref) => {
    const isContainedField = variant === 'contained';
    return (
        <div>
            <div
                className={mergeClasses(classNames(
                    field({ className, intent: variant, size }),
                    {
                        "border-destructive": !!error
                    }
                ))}
            >
                {isContainedField && (
                    <label
                        htmlFor={id}
                        className={classNames(
                            "px-2 text-xs text-muted-foreground block pt-1 group-focus-within:text-primary-dark",
                            {
                                "text-destructive": !!error
                            }
                        )}
                    >
                        {label}
                    </label>
                )}
                <input ref={ref} className="px-2 outline-none block h-full text-accent-foreground" name={name} id={id} {...props} />
            </div>
            {error && (
                <div className="text-destructive text-sm mt-1 flex gap-2 items-center">
                    <BiError size={18} />
                    <span>
                        {error.message}
                    </span>
                </div>
            )}
        </div>
    )
})
export default Field