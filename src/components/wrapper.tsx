import { PropsWithChildren } from "react"
import {
    PDfEmbedTechniqueWithDescriptionDict,
    T_PdfEmbedTechnique
} from "utils/controller"

type T_Props = {
    pdfEmbedTechnique: T_PdfEmbedTechnique
    userAgent: string
}

export function SectionWrapper(props: PropsWithChildren<T_Props>): JSX.Element {
    return (
        <>
            <style jsx>
                {`
                    .section-ctn {
                        border: 1px solid black;
                        border-radius: 0.5rem;
                        padding: 1rem;
                        max-width: 300rem;
                    }
                    .child-ctn {
                        outline: 0.063rem solid black;
                        margin-top: 1rem;
                        position: relative;
                    }
                    .pdf-text {
                        position: absolute;
                        z-index: -1;
                        top: 1rem;
                        left: 0;
                        right: 0;
                        text-align: center;
                    }
                    h2 {
                        font-size: 1.15rem;
                        line-height: 1.45rem;
                        padding: 0;
                        margin: 0;
                    }
                    p {
                        font-size: 0.95rem;
                        line-height: 1.25rem;
                        padding: 0;
                        margin: 0;
                    }
                    code {
                        font-size: 0.85rem;
                    }
                `}
            </style>
            <div className="section-ctn">
                <p>
                    Technique: <code>{props.pdfEmbedTechnique}</code>
                </p>

                <p style={{ margin: "1rem 0" }}>
                    {
                        PDfEmbedTechniqueWithDescriptionDict[
                            props.pdfEmbedTechnique
                        ]
                    }
                </p>

                {props.pdfEmbedTechnique ===
                "iframe-with-regular-url" ? null : (
                    <p style={{ marginTop: "1rem" }}>
                        NOTE: If PDF is not showing, refresh your browser.
                    </p>
                )}

                <div className="child-ctn">
                    <p className="pdf-text">PDF should be displayed here</p>
                    {props.children}
                </div>
            </div>
        </>
    )
}
