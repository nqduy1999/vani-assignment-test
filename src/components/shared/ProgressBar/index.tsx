import { FC } from "react";

interface ProgressBarProps {
    total: number,
    current: number,
    colorBar?: string,
    title?: string,
    description?: string
}

const ProgressBar: FC<ProgressBarProps> = ({ total, current, title, description }) => {
    return (
        <div className="w-full">
            {title ? <h2 className="sr-only">{title}</h2> : <></>}
            <div>
                {description ? <p className="text-xs font-medium text-gray-500">{description}</p> : <></>}
                <div className="mt-4 overflow-hidden bg-gray-200">
                    <div className={`h-2 bg-primary`} style={{ width: `${(current / total) * 100}%` }} />
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;