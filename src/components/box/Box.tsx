import { HTMLAttributes, PropsWithChildren } from 'react'

type DivElement = PropsWithChildren & HTMLAttributes<HTMLDivElement>

const Box = ({ children, className, ...divProps }: DivElement) => {
    return (
        <div {...divProps} className={'bg-white rounded px-6 py-4 ' + className}>
            {children}
        </div>
    )
}

export default Box
