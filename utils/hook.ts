import { Controller, T_MobileOperatingSystem } from "@app/utils/controller"
import { useEffect, useState } from "react"

export function useGetUserAgent() {
    const [userAgent, setUserAgent] = useState<Navigator["userAgent"] | null>(
        null
    )
    useEffect(() => {
        setUserAgent(navigator.userAgent)
    }, [])
    console.log(userAgent)
    return {
        userAgent
    }
}

export function useGetMobileOS() {
    const [mobileOS, setMobileOS] = useState<T_MobileOperatingSystem>("unknown")
    useEffect(() => {
        setMobileOS(Controller.getMobileOS(navigator))
    }, [])
    return { mobileOS }
}

export function useGetIsMobile() {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    useEffect(() => {
        setIsMobile(Controller.isMobile(navigator))
    }, [])
    return { isMobile }
}
