import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'

export function useLenis() {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.9,
            wheelMultiplier: 1.0,
        })

        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return lenisRef
}



