import { Button } from "@/components/shared";
import { IMAGES, PATHNAME } from "@/constant";
import { QuizContextProps, useQuizContext } from "@/contexts/quiz.context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DrawerQuestionProps {
    visible: boolean,
    onCancel?: () => void,
}

const DrawerQuestion: FC<DrawerQuestionProps> = ({ visible, onCancel }) => {
    const { onNextQuiz, currentQuiz, onResetSelectedQuestion } = useQuizContext() as QuizContextProps
    const router = useRouter()
    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (visible
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen bottom-0 right-0 absolute bg-white h-[250px] shadow-xl delay-400 duration-500 ease-in-out transition-all transform rounded-t-xl " +
                    (visible ? " translate-y-0 " : " translate-y-full ")
                }
            >
                <article className="relative items-center pb-10 flex flex-col space-y-6 overflow-y-scroll h-full p-5">
                    <div className="flex items-center justify-center flex-col gap-3">
                        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-lightgray">
                            <Image width={30} height={30} src={IMAGES.icons.success} alt="success" />
                        </div>
                        <p className="text-primary font-bold">Correct!</p>
                        <p className="text-xl font-bold line-clamp-2">{currentQuiz?.hint || ''}</p>
                        <Button className="w-full" variant="primary" size="lg" onClick={() => {
                            onNextQuiz(() => {
                                router.push(PATHNAME.RESULT)
                                onResetSelectedQuestion()
                            })
                            onCancel && onCancel()
                        }}>Next</Button>
                    </div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
            ></section>
        </main>
    )
}

export default DrawerQuestion