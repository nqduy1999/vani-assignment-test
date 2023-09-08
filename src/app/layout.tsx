import "public/styles/globals.css";
import Providers from "./provider";
import { QuizContextProvider } from "@/contexts/quiz.context";

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
      <body>
        <QuizContextProvider>
          <Providers>{children}</Providers>
        </QuizContextProvider>
      </body>
    </html>
  );
}
