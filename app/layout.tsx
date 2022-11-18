export default function RootLayout({ children }:React.PropsWithChildren) {
  return (
    <html>
      <head></head>
      <body>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}