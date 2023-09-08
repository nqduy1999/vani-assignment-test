import { CurrentQuizType, IQuiz } from "@/domain"
import { FC } from "react"
import AnswerItem from "./AnswerItem"

interface QuizItemProps {
    currentQuiz: CurrentQuizType
}

const QuizItem: FC<QuizItemProps> = ({ currentQuiz }) => {

    return (
        <div className="flex md:items-center flex-col">
            <p className="text-primary font-bold text-lg md:text-xl">Q{currentQuiz.ordNumber + 1}</p>
            <p className="line-clamp-2 text-lg md:text-xl font-medium">{currentQuiz?.title}</p>
            <div className="h-[300px] flex gap-[16px] flex-col justify-center">
                {currentQuiz?.answers?.map(answer => (
                    <AnswerItem
                        key={answer.id}
                        answer={answer}
                    />
                ))}
            </div>
        </div>
    )
}

export default QuizItem