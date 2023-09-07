import MainLayout from "@/layouts/MainLayout"

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-lightgray min-h-[91vh]">{children}</div>
    )
}