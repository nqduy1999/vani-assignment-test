'use client'
import { ProgressBar } from "@/components/shared"
import useToggle from "@/hooks/useToggle"
import MainLayout from "@/layouts/MainLayout"
import { HintQuestion, QuizItem, ModalBack, DrawerQuestion } from "./components"
import { useEffect, useState } from "react"
import { QuizContextProps, useQuizContext } from "@/contexts/quiz.context"
import { useQuizContentQuery } from "@/queries/quiz"

const QuizPage = () => {
    // fetch data 
    const data = useQuizContentQuery()
    //
    const { visible, onClose, onToggle } = useToggle()
    const { visible: visibleDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useToggle()
    // get data from store
    const { selectedAnswers, onCheckIsValidAnswer, currentQuiz, total, onSetData } = useQuizContext() as QuizContextProps

    // side effect
    useEffect(() => {
        if (currentQuiz && selectedAnswers?.length > 0) {
            onCheckIsValidAnswer(onOpenDrawer)
        }
    }, [onCheckIsValidAnswer])

    useEffect(() => {
        onSetData(data);
    }, [])

    return (
        <MainLayout onClickBack={onToggle}>
            <div className="bg-lightgray min-h-[91vh]">
                <ProgressBar colorBar="#5818C6" current={currentQuiz?.ordNumber + 1} total={total} />
                <div className="h-full w-full bg-lightgray md:px-10 md:py-10 px-4 py-6">
                    <QuizItem currentQuiz={currentQuiz} />
                    {currentQuiz?.hint ? <HintQuestion hint={currentQuiz?.hint} /> : null}
                </div>
                {visible ? <ModalBack visible={visible} onCancel={onClose} /> : null}
                {visibleDrawer ? <DrawerQuestion visible={visibleDrawer} onCancel={onCloseDrawer} /> : null}
            </div>
        </MainLayout>
    )
}

export default QuizPage
