import "./globals.css";
import Breadcrumbs from "./components/Breadcrumbs";

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
        <header>
          <Breadcrumbs />
        </header>
        {children}
      </body>
    </html>
  );
}
