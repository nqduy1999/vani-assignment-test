'use client'
import { ProgressBar } from "@/components/shared"
import { useQuiz } from "./hook"
import QuizItem from "./components/Quiz"
import { IQuiz } from "@/domain"

const QuizPage = () => {
    const { currentIdx, total, currentQuiz } = useQuiz()
    console.log(currentQuiz, 'currentQuiz');

    return (
        <>
            <ProgressBar colorBar="#5818C6" current={currentIdx} total={total} />
            <div className="h-full w-full bg-lightgray md:px-10 md:py-10 px-4 py-6">
                <QuizItem quiz={currentQuiz as IQuiz} currentIdx={currentIdx} />
            </div>
        </>
    )
}

export default QuizPage
