import { IQuiz } from "@/domain"
import { FC } from "react"
import AnswerItem from "./AnswerItem"

interface QuizItemProps {
    quiz: IQuiz,
    currentIdx: number
}

const QuizItem: FC<QuizItemProps> = ({ quiz, currentIdx }) => {
    return (
        <div className="flex md:items-center flex-col">
            <p className="text-primary font-bold text-lg md:text-xl">Q{currentIdx}</p>
            <p className="line-clamp-2 text-lg md:text-xl font-medium">{quiz?.title}</p>
            <div className="my-12 md:my-8 flex gap-[16px] flex-col">
                {quiz?.answers?.map(answer => (
                    <AnswerItem key={answer.id} answer={answer} />
                ))}
            </div>
        </div>
    )
}

export default QuizItem