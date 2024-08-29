import { T_HtmlAnchor } from "@app/components/design/link"
import { Controller } from "utils/controller"

export function TechniqueOpenAndDownloadPdf(props: {
    href: T_HtmlAnchor["href"]
}) {
    const { href } = props

    return (
        <>
            <style jsx>
                {`
                    .actions-ctn {
                        display: flex;
                        flex-direction: row;
                        gap: 1.5rem;
                    }
                    .action {
                        display: flex;
                    }
                    .action-btn {
                        padding: 0.1rem 0.2rem;
                    }
                    .actions {
                        border: 0.063rem solid black;
                        border-radius: 0.5rem;
                        padding: 1rem;
                        display: flex;
                        gap: 0.5rem;
                    }
                `}
            </style>

            <div className="actions-ctn">
                <div className="actions">
                    <div className="action">Technique:</div>
                    <div className="action">
                        <button
                            className="action-btn"
                            onClick={() => {
                                window.open(href)
                            }}>
                            Open PDF in a new tab
                        </button>
                    </div>
                </div>

                <div className="actions">
                    <div className="action">Technique:</div>
                    <div className="action">
                        <button
                            className="action-btn"
                            onClick={() => {
                                Controller.downloadPdf(href, "your-document")
                            }}>
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
