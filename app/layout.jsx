import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&family=Lora:ital@1&family=Montserrat:wght@700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
