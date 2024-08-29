import { PropsWithChildren } from "react"
import { IFRAME_MAX_HEIGHT } from "src/services/iframe/iframe.config"

type T_Props = PropsWithChildren<{
    href: string
}>

export function TechniqueIframeWithRegularUrl(props: T_Props): JSX.Element {
    return (
        <>
            <style jsx>{``}</style>

            <iframe
                src={props.href}
                width={"100%"}
                height={IFRAME_MAX_HEIGHT}
            />
        </>
    )
}
