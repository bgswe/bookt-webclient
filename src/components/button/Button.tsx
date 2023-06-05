'use client'

import { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import ClassNames from 'classnames'

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonProps {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
}

const standardClassNames = [
    'rounded',
    'self-center',
    'px-2',
    'py-1',
    'font-medium',
]

const primaryClassNames = ['bg-sky-700', 'text-white']

const textClassNames = [
    'bg-transparent',
    'text-sky-700',
    'hover:bg-opacity-25',
    'hover:bg-sky-700',
]

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    ...buttonProps
}: Props) => {
    return (
        <button
            className={ClassNames(
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
