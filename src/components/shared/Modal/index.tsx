import { FC, ReactNode } from "react"
import Button from "../Button"

export interface ModalProps {
    visible: boolean,
    onCancel: () => void,
    closable?: boolean,
    title?: string | ReactNode,
    onConfirm?: () => void,
    cancelText?: string,
    confirmText?: string,
    children: ReactNode,
}

const Modal: FC<ModalProps> = ({ onCancel, visible, closable, title, cancelText, onConfirm, confirmText, children }) => {
    return (!visible ?
        <></> :
        (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className={`relative w-[350px] m-6 transition-opacity transition-transform duration-300 transform-translate-y-full`}>
                    <div className="p-6 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {title ? <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                            <h3 className="text-3xl font=semibold">{title} </h3>

                        </div> : null}
                        {closable ? <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={onCancel}
                        >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                x
                            </span>
                        </button> : null}
                        <div className="relative pb-6 flex-auto">
                            {children}
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                variant="default"
                                size="lg"
                                onClick={onCancel}
                                className="min-w-[120px] w-fit"
                            >
                                {cancelText ? cancelText : 'Cancel'}
                            </Button>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={onConfirm}
                                className="min-w-[120px] w-full"
                            >
                                {confirmText ? confirmText : 'Confirm'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Modal