export type T_PdfEmbedTechnique =
    | "iframe-with-google-docs-viewer-url"
    | "object-with-embed"
    | "iframe-with-regular-url"

export const PDfEmbedTechniqueWithDescriptionDict: {
    [K in T_PdfEmbedTechnique]: string
} = {
    "iframe-with-google-docs-viewer-url":
        "This technique embeds the PDF using an iframe that loads the document through Google Docs Viewer. It allows users to view PDFs without needing a dedicated PDF viewer plugin. The PDF is rendered using Google's service, which can provide a consistent viewing experience across different browsers and devices. However, it requires an internet connection and may have limitations on file size or access to private documents.",
    "object-with-embed":
        "This method uses the HTML <object> tag with a nested <embed> tag to display the PDF directly in the browser. It relies on the browser's built-in PDF viewer or a user-installed PDF plugin. This technique offers good compatibility across modern browsers and can work offline if the PDF is hosted locally. However, the viewing experience may vary depending on the user's browser and installed plugins.",
    "iframe-with-regular-url":
        "This approach embeds the PDF in an iframe using its direct URL. The PDF is rendered using the browser's default PDF viewer. This method is straightforward and works well in browsers with built-in PDF viewers (like Chrome and Firefox). It provides a native viewing experience but may not be consistent across all browsers, especially older ones that lack built-in PDF support."
}

export type T_MobileOperatingSystem = "android" | "ios" | "unknown"

export const Controller = {
    isMobile: (navigator: Navigator): boolean => {
        const userAgent = navigator.userAgent.toLowerCase()
        return Boolean(userAgent.match(/mobile|android|iphone/i))
    },
    isIe11: (): boolean => {
        return /MSIE|Trident/.test(window.navigator.userAgent)
    },
    getMobileOS: (navigator: Navigator): "android" | "ios" | "unknown" => {
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.match(/android/i)) return "android"
        if (userAgent.match(/iphone/i)) return "ios"
        return "unknown"
    },
    downloadPdf(pdfUrl: string, filename?: string) {
        try {
            if (!pdfUrl) throw new Error("pdfUrl is required")
            fetch(pdfUrl)
                .then((response) => response.blob())
                .then((blob) => {
                    const url = window.URL.createObjectURL(blob)
                    const a = document.createElement("a")
                    a.style.display = "none"
                    a.href = url
                    a.download = filename || "document.pdf"
                    document.body.appendChild(a)
                    a.click()
                    window.URL.revokeObjectURL(url)
                    document.body.removeChild(a)
                })
                .catch((error) =>
                    console.error("Error downloading PDF:", error)
                )
        } catch (e) {
            console.error(e)
        }
    }
}
