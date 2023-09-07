import { FC, ReactFragment, ReactNode } from "react"
import { SizeButton, VariantButton, cnBySizeButton, cnByVariantButton } from "./const"
import cn from "classnames"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: keyof typeof VariantButton,
    children: ReactFragment,
    size: keyof typeof SizeButton
}

const Button: FC<ButtonProps> = ({ size, variant, children, ...props }) => {
    return (
        <button
            {...props}
            className={cn({
                'disabled': props.disabled,
                [`${cnBySizeButton[size]} ${cnByVariantButton[variant]} font-[600] rounded-lg`]: true,
            })}
        >
            {children}
        </button >
    )

}

export default Button