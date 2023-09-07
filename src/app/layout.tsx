import "public/styles/globals.css";
import Providers from "./provider";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
