'use client'

import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useState, useRef } from 'react'

interface LottieIconProps {
    animationData: any
    className?: string
    loop?: boolean
    autoplay?: boolean
    hoverPlay?: boolean
}

export default function LottieIcon({
    animationData,
    className = 'w-6 h-6',
    loop = false,
    autoplay = false,
    hoverPlay = true,
}: LottieIconProps) {
    const [isHovered, setIsHovered] = useState(false)
    const lottieInstanceRef = useRef<LottieRefCurrentProps>(null)

    const handleMouseEnter = () => {
        setIsHovered(true)
        if (hoverPlay && lottieInstanceRef.current) {
            lottieInstanceRef.current.goToAndPlay(0, true)
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        if (hoverPlay && lottieInstanceRef.current && !loop) {
            lottieInstanceRef.current.goToAndStop(0, true)
        }
    }

    return (
        <div
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Lottie
                lottieRef={lottieInstanceRef}
                animationData={animationData}
                loop={loop || isHovered}
                autoplay={autoplay || (hoverPlay && isHovered)}
            />
        </div>
    )
}
