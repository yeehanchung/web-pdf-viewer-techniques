import { IFRAME_MAX_HEIGHT } from "src/services/iframe/iframe.config"

type T_Props = {
    href: string
}

export function TechniqueObjectWithEmbed(props: T_Props): JSX.Element {
    const { href } = props

    return (
        <>
            <style jsx>{``}</style>
            <object
                type="application/pdf"
                data={`https://docs.google.com/gview?url=${href}&embedded=true`}
                width={"100%"}
                height={IFRAME_MAX_HEIGHT}>
                <embed
                    src={`https://docs.google.com/viewer?url=${href}&embedded=true`}
                />
            </object>
        </>
    )
}
