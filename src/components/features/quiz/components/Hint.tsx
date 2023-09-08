import { IMAGES } from "@/constant";
import useToggle from "@/hooks/useToggle";
import Image from "next/image";
import { FC, useState } from "react"

interface HintQuestionProps {
    hint?: string
}

const HintQuestion: FC<HintQuestionProps> = ({ hint }) => {
    const { visible, onToggle } = useToggle()
    return (
        <div className="py-5 border-t-[1px] border-gray">
            <div className="font-bold text-lg flex w-full gap-3 cursor-pointer transition-all ease-in-out duration-300" onClick={onToggle}>
                <p>Hint</p>
                <Image width={25} height={10} src={visible ? IMAGES.icons.arrowUp : IMAGES.icons.arrowDown} alt="icon dropdown" />
            </div>
            {visible ? <div className="py-5 transition-all ease-in-out duration-300 w-full font-medium">{hint}</div> : null}
        </div>
    )
}

export default HintQuestion