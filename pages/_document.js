"use client"
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&family=Lora:ital@1&family=Montserrat:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css"  rel="stylesheet" />
      </Head> 
      <body>
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
      </body>
    </Html>
  )
}
