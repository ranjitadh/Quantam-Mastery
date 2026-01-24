import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
}

export default function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                'mx-auto w-full',
                'px-4 sm:px-6 lg:px-8', // Responsive padding
                'max-w-[1400px]', // Max width control
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
