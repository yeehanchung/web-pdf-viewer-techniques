import { default as NextLink, LinkProps } from "next/link"
import { AnchorHTMLAttributes, PropsWithChildren } from "react"

export type T_NextLink = LinkProps
export type T_HtmlAnchor = AnchorHTMLAttributes<HTMLAnchorElement>

export function Link(
    props: PropsWithChildren<{
        nextLinkProps: Omit<T_NextLink, "passHref">
        anchorProps: T_HtmlAnchor
    }>
) {
    return (
        <>
            <style jsx>
                {`
                    a {
                        text-decoration: underline;
                    }
                `}
            </style>

            <NextLink {...props.nextLinkProps} passHref>
                <a {...props.anchorProps}>{props.children}</a>
            </NextLink>
        </>
    )
}
