import { IAnswer } from "@/domain"
import { FC } from "react"

interface AnswerItemProps {
    answer: IAnswer
}

const AnswerItem: FC<AnswerItemProps> = ({ answer }) => {
    return (
        <div className="rounded-lg px-4 py-4 text-stone-400 shadow-sm bg-white md:min-w-[600px] cursor-pointer">
            {answer.content}
        </div>
    )
}

export default AnswerItem