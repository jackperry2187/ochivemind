import { ReactNode } from "react";
import { analytics, app } from "../util/firebase"

export const LoadFirebase: React.FC<{children: ReactNode}> = ({ children }) => {
    if(!app || !analytics) return (
        <div className='text-white position-absolute top-50 start-50 translate-middle'>
            Loading...
        </div>
    );
    return (
        <>
            {children}
        </>
    )
}