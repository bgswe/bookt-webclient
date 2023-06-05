import { PropsWithChildren } from 'react'
import Image from 'next/image'

const Header = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex px-4 py-2">
            <Image
                src="bookt-logo.svg"
                alt="bookt logo"
                width="100"
                height="40"
            />
            <div className="flex-1 flex justify-end">{children}</div>
        </div>
    )
}

export default Header
