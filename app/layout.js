export const metadata = {
  title: 'Plataforma de Ecommerce',
  description: 'Una plataforma de comercio electrónico construida con Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
