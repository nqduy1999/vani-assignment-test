import { useQuizContentQuery } from "@/queries/quiz"
import { useState } from "react"

export const useQuiz = () => {
    const { data, total } = useQuizContentQuery()

    const [cQuiz, setCQuiz] = useState<string>(data[0]?.id || '')

    return {
        total: total || 0,
        currentIdx: data?.findIndex(quiz => quiz.id === cQuiz) || 1,
        currentQuiz: data?.find(quiz => quiz.id === cQuiz)
    }

}