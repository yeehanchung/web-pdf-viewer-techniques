import { ReactNode } from "react"

export function AppWrapper(props: { children: ReactNode }) {
    return (
        <>
            <style jsx>
                {`
                    .app-wrapper-ctn {
                        margin: 1rem 1.5rem 3rem 1.5rem;
                        max-width: 50rem;
                    }
                `}
            </style>

            <div className="app-wrapper-ctn">{props.children}</div>
        </>
    )
}
