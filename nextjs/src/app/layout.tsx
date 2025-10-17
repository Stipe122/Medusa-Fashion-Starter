import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `:root { --font-mona-sans: 'Mona Sans', -apple-system, BlinkMacSystemFont, sans-serif; }`}} />
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
