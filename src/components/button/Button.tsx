import ClassNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonProps {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
}

const standardClassNames = ['min-w-[6em]', 'rounded', 'self-center', 'px-2', 'py-1', 'font-medium']

const primaryClassNames = ['bg-sky-700', 'text-white', 'disabled:opacity-50']

const textClassNames = ['bg-transparent', 'text-sky-700', 'hover:bg-opacity-25', 'hover:bg-sky-700']

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...buttonProps }: Props) => {
    return (
        <button
            className={ClassNames(
                className,
                standardClassNames,
                variant === 'primary' ? primaryClassNames : [],
                variant === 'secondary' ? textClassNames : [],
                size === 'small' ? ['text-sm'] : [],
                size === 'medium' ? ['text-md'] : [],
                size === 'large' ? ['text-lg'] : []
            )}
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export default Button
