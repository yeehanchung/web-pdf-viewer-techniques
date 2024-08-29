import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    const method = {
        renderPlausible: () => {
            return (
                <script
                    defer
                    data-domain="web-pdf-viewer-techniques.netlify.app"
                    src="https://plausible.io/js/script.js"
                />
            )
        }
    }

    return (
        <Html lang="en">
            <Head>{method.renderPlausible()}</Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
