'use client'

import Lottie from 'lottie-react'
import { useState } from 'react'

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
    const [lottieRef, setLottieRef] = useState<any>(null)

    const handleMouseEnter = () => {
        setIsHovered(true)
        if (hoverPlay && lottieRef) {
            lottieRef.goToAndPlay(0, true)
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        if (hoverPlay && lottieRef && !loop) {
            lottieRef.goToAndStop(0, true)
        }
    }

    return (
        <div
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Lottie
                lottieRef={setLottieRef}
                animationData={animationData}
                loop={loop || isHovered}
                autoplay={autoplay || (hoverPlay && isHovered)}
            />
        </div>
    )
}
