import { IAnswer, IQuiz } from "@/domain"
import { FC, useMemo, useState } from "react"
import classNames from "classnames"
import Image from "next/image"
import { IMAGES } from "@/constant"
import { QuizContextProps, useQuizContext } from "@/contexts/quiz.context"

interface AnswerItemProps {
    answer: IAnswer,
}

const renderBorderColor = (status: boolean) => status ? 'primary' : 'red-600'
const renderColor = (status: boolean) => status ? 'primary' : '#333333'

const AnswerItem: FC<AnswerItemProps> = ({ answer }) => {
    const { selectedAnswers, onSelectedAnswer } = useQuizContext() as QuizContextProps

    const isSelected = useMemo(() => selectedAnswers.includes(answer?.id) || false, [answer, selectedAnswers])

    return (
        <div
            onClick={() => onSelectedAnswer(answer.id)}
            className={classNames({
                'rounded-lg px-4 py-4 bg-white md:min-w-[600px] cursor-pointer': true,
                'shadow-sm text-stone-400 border-none': !isSelected,
                [`border-[1px] font-medium text-${renderColor(answer.isCorrect)} border-${renderBorderColor(answer?.isCorrect)}`]: isSelected
            })}
        >
            <div className={`flex flex-${answer?.isCorrect ? 'row' : 'col'} justify-center items-center`}>
                <p>{answer.content}</p>
                {isSelected ?
                    <>
                        {answer?.isCorrect ?
                            <Image src={IMAGES.icons.success} alt="success-icon" />
                            :
                            <p className="font-medium text-sm text-red-600">Please try again</p>}
                    </>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default AnswerItem