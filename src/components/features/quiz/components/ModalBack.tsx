import { Modal } from "@/components/shared"
import { ModalProps } from "@/components/shared/Modal"
import { PATHNAME } from "@/constant"
import { useRouter } from "next/navigation"
import { FC } from "react"

interface ModalBackProps extends Omit<ModalProps, 'children'> { }

const ModalBack: FC<ModalBackProps> = (props) => {
    const { push } = useRouter()
    return (
        <Modal {...props} confirmText="End Quiz" onConfirm={() => push(PATHNAME.HOME)}>
            <p className="text-lg font-bold">Do you want to end Quiz</p>
            <p className="mt-3 text-md w-[300px] ">Once you end this quiz, you will have to start from the first question again.</p>
        </Modal>
    )
}

export default ModalBack