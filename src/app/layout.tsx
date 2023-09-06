import Image from "next/image";
import "public/styles/globals.css";
import logoVani from 'public/images/vani-logo.svg'

export const metadata = {
  title: "vani assignment",
  openGraph: {
    title: 'Vani Assignment',
    description: 'Nguyen Quoc Duy Vani Assignment',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="public/images/favicon.ico" sizes="any" />
      </head>
      <body className="text-white min-h-screen">
        <Image width={100} height={45} src={logoVani} alt="image-logo" className="absolute top-5 left-5" />
        {children}
      </body>
    </html>
  );
}
