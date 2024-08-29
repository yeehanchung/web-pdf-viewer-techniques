import { AppWrapper } from "@app/components/app-wrapper"
import { DividerHorizontal } from "@app/components/design/divider-horizontal"
import { Link } from "@app/components/design/link"
import { Spacer } from "@app/components/design/spacer"
import { TechniqueIframeWithGoogleDocsViewerUrl } from "@app/components/technique/technique-iframe-with-google-docs-viewer-url"
import { TechniqueIframeWithRegularUrl } from "@app/components/technique/technique-iframe-with-regular-url"
import { TechniqueObjectWithEmbed } from "@app/components/technique/technique-object-with-embed"
import { TechniqueOpenAndDownloadPdf } from "@app/components/technique/technique-open-and-download-pdf"
import { SectionWrapper } from "@app/components/wrapper"
import {
    useGetIsMobile,
    useGetMobileOS,
    useGetUserAgent
} from "@app/utils/hook"

export default function Homepage(): JSX.Element {
    const href = "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf"

    const { userAgent } = useGetUserAgent()
    const { mobileOS } = useGetMobileOS()
    const { isMobile } = useGetIsMobile()
    return (
        <>
            <style jsx global>
                {`
                    Techniquep {
                        margin: 0;
                        margin-top: 0.5rem;
                    }
                `}
            </style>

            <style jsx>
                {`
                    .source-code-ctn {
                        text-align: end;
                    }

                    td {
                        padding: 0.25rem;
                    }
                    .td-user-agent {
                        height: 3rem;
                    }
                `}
            </style>

            <AppWrapper>
                <div className="source-code-ctn">
                    <p>
                        Source code on{" "}
                        <Link
                            nextLinkProps={{
                                href: "https://github.com/yeehanchung/debug-mobile-in-app-browser"
                            }}
                            anchorProps={{
                                target: "_blank"
                            }}>
                            GitHub
                        </Link>
                    </p>
                </div>

                <div className="details-ctn">
                    <table>
                        <tr>
                            <td>Mobile/Desktop:</td>
                            <td>{isMobile ? "Mobile" : "Desktop"}</td>
                        </tr>
                        <tr>
                            <td>Mobile OS:</td>
                            <td>{isMobile ? mobileOS : "-"}</td>
                        </tr>
                        <tr>
                            <td>User Agent:</td>
                            <td className="td-user-agent">{userAgent}</td>
                        </tr>
                    </table>
                </div>

                <DividerHorizontal />

                <TechniqueOpenAndDownloadPdf href={href} />

                <Spacer />

                <SectionWrapper
                    pdfEmbedTechnique="iframe-with-regular-url"
                    userAgent={userAgent}>
                    <TechniqueIframeWithRegularUrl href={href} />
                </SectionWrapper>

                <Spacer />

                <SectionWrapper
                    pdfEmbedTechnique="iframe-with-google-docs-viewer-url"
                    userAgent={userAgent}>
                    <TechniqueIframeWithGoogleDocsViewerUrl href={href} />
                </SectionWrapper>

                <Spacer />

                <SectionWrapper
                    pdfEmbedTechnique="object-with-embed"
                    userAgent={userAgent}>
                    <TechniqueObjectWithEmbed href={href} />
                </SectionWrapper>
            </AppWrapper>
        </>
    )
}
