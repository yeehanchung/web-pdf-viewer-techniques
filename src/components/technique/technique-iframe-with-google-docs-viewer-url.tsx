import { PropsWithChildren } from "react"
import { IFRAME_MAX_HEIGHT } from "src/services/iframe/iframe.config"

type T_Props = PropsWithChildren<{
    href: string
}>

export function TechniqueIframeWithGoogleDocsViewerUrl(
    props: T_Props
): JSX.Element {
    return (
        <>
            <style jsx>{``}</style>

            <iframe
                src={`https://docs.google.com/viewer?url=${props.href}&embedded=true`}
                width={"100%"}
                height={IFRAME_MAX_HEIGHT}
            />
        </>
    )
}
