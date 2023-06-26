import { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";


// cva
const container = cva(["mx-auto"], {
    variants: {
        size: {
            sm: ["sm:container", "sm:px-2"],
            md: ["md:container", "md:px-2"],
            lg: ["lg:container", "lg:px-2"],
        },
    },
    defaultVariants: {
        size: "md",
    },
});

type Props = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    className?: string
}

const Container = ({ size = 'md', className, children }: Props) => {
    return (
        <div className={classNames(container({ size }), className)}>{children}</div>
    )
};
export default Container;