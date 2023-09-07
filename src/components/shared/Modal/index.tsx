import { FC, ReactNode } from "react"
import Button from "../Button"

interface ModalProps {
    visible: boolean,
    onCancel: () => void,
    closable?: boolean,
    title?: string | ReactNode,
    onConfirm?: () => void,
    cancelText?: string,
    confirmText?: string,
    children: ReactNode
}

const Modal: FC<ModalProps> = ({ onCancel, visible, closable, title, cancelText, onConfirm, confirmText, children }) => {
    return (!visible ?
        <></> :
        (
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            {title ? <h3 className="text-3xl font=semibold">{title} </h3> : null}
                            {closable ? <button
                                className="bg-transparent border-0 text-black float-right"
                                onClick={onCancel}
                            >
                                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                    x
                                </span>
                            </button> : null}
                        </div>
                        <div className="relative p-6 flex-auto">
                            {children}
                        </div>
                        <div className="flex items-center">
                            <Button
                                variant="default"
                                size="lg"
                                onClick={onCancel}
                            >
                                {cancelText ? cancelText : 'Cancel'}
                            </Button>
                            <button
                                className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={onConfirm}
                            >
                                {confirmText ? confirmText : 'Confirm'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Modal