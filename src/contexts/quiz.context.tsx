"use client"

import { CurrentQuizType, IQuiz, IResponseList, TypeQuiz } from "@/domain";
import { FC, ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";

export interface QuizContextProps {
    total: number,
    currentQuiz: CurrentQuizType,
    selectedAnswers: Array<string>,
    onSelectedAnswer: (answer: string) => void,
    onCheckIsValidAnswer: (callback: any) => void,
    onSetData: (dataQuiz: IResponseList<IQuiz>) => void,
    onNextQuiz: (callback?: any) => void,
    onResetSelectedQuestion: () => void
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

interface QuizContextProviderProps {
    children: ReactNode
}

export const QuizContextProvider: FC<QuizContextProviderProps> = ({ children }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Array<string>>([])
    const [data, setData] = useState<IResponseList<IQuiz>>()
    const [idSelectedQuiz, setIdSelectedQuiz] = useState<string>('')

    const onSetDataQuiz = (dataQuiz: IResponseList<IQuiz>) => {
        setData(dataQuiz)
    }

    const currentQuiz = useMemo(() => {
        return data?.data?.map((quiz, idx) => ({ ...quiz, ordNumber: idx })).find(quiz => quiz.id === idSelectedQuiz) || ({ ...data?.data[0], ordNumber: 0 })
    }, [data, idSelectedQuiz]) as CurrentQuizType


    const onResetSelectedAnswer = () => {
        setSelectedAnswers([])
    }

    const onResetSelectedQuestion = () => {
        setIdSelectedQuiz('')
    }

    const onSelectedAnswer = (answer: string) => {
        let answers: Array<string> = []
        if (currentQuiz.type === TypeQuiz.multi) {
            answers = selectedAnswers.includes(answer) ? selectedAnswers.filter(ans => ans !== answer) : selectedAnswers.concat([answer])
        } else {
            answers = [answer]
        }
        setSelectedAnswers(answers)
    }

    // Check valid answer
    const onCheckIsValidAnswer = useCallback((callback: any) => {
        if (currentQuiz?.answers?.length > 0) {
            const validAnswers = currentQuiz?.answers?.filter(answer => answer.isCorrect).map(answer => answer.id);
            const isValid = (selectedAnswers.length === validAnswers.length && selectedAnswers.every(answer => validAnswers.includes(answer)))
            if (isValid) callback()
        }
    }, [selectedAnswers, currentQuiz])

    // On Next Quiz
    const onNextQuiz = useCallback((callback?: () => void) => {
        onResetSelectedAnswer()
        const idxCurrentQuiz = currentQuiz.ordNumber
        // Ended Quiz
        if (idxCurrentQuiz + 1 === data?.data?.length) {
            callback && callback()
            return;
        }
        setIdSelectedQuiz(data?.data?.[idxCurrentQuiz + 1]?.id as string)
    }, [currentQuiz])

    return (
        <QuizContext.Provider
            value={{
                currentQuiz,
                selectedAnswers,
                onSelectedAnswer,
                onCheckIsValidAnswer,
                onSetData: onSetDataQuiz,
                onNextQuiz,
                total: data?.total || 0,
                onResetSelectedQuestion
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => useContext<QuizContextProps | undefined>(QuizContext);

