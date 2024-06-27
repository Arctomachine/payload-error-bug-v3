import { ReactNode } from 'react'

function Layout ({ children }: { children: ReactNode }) {

  return (
    <html>
    <body>
    {children}
    </body>
    </html>
  )
}

export default Layout
