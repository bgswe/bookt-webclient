import ClassNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren, useMemo } from 'react'

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

interface Props extends ButtonProps {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    semantics?: 'default' | 'success' | 'caution'
}

const standardClassNames = [
    'min-w-[6em]',
    'rounded',
    'self-center',
    'px-2',
    'py-1',
    'font-medium',
]

const primaryClassNames = (current: string) => {
    const classes = ['text-white']

    switch (current) {
        case 'default':
            classes.push('bg-sky-700', 'hover:bg-sky-600')
            break
        case 'success':
            classes.push('bg-green-500', 'hover:bg-green-700')
            break
        case 'caution':
            classes.push('bg-red-500', 'hover:bg-red-700')
            break
        default:
            throw 'current semantics value unsupported: ' + current
    }

    return classes
}

const secondaryClassNames = (current: string) => {
    const classes = ['bg-transparent', 'hover:bg-opacity-25']

    switch (current) {
        case 'default':
            classes.push('hover:bg-sky-700', 'text-sky-700')
            break
        case 'success':
            classes.push('hover:bg-green-500', 'text-green-500')
            break
        case 'caution':
            classes.push('hover:bg-red-500', 'text-red-500')
            break
        default:
            throw 'current semantics value unsupported: ' + current
    }

    return classes
}

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    semantics = 'default',
    className = '',
    ...buttonProps
}: Props) => {
    const variantClasses = useMemo(() => {
        switch (variant) {
            case 'primary':
                return primaryClassNames(semantics)
            case 'secondary':
                return secondaryClassNames(semantics)
            default:
                throw 'variant value not supported: ' + variant
        }
    }, [variant, semantics])

    const sizeClasses = useMemo(() => {
        switch (size) {
            case 'small':
                return ['text-sm']
            case 'medium':
                return ['text-md']
            case 'large':
                return ['text-lg']
            default:
                throw 'size value not supported: ' + size
        }
    }, [size])

    return (
        <button
            className={ClassNames(
                className,
                standardClassNames,
                variantClasses,
                sizeClasses
            )}
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export default Button
