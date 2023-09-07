import { FC } from "react";

interface ProgressBarProps {
    total: number,
    current: number,
    colorBar?: string,
    title?: string,
    description?: string
}

const ProgressBar: FC<ProgressBarProps> = ({ colorBar = 'blue', total, current, title, description }) => {
    return (
        <div>
            {title ? <h2 className="sr-only">{title}</h2> : <></>}
            <div>
                {description ? <p className="text-xs font-medium text-gray-500">{description}</p> : <></>}
                <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <div className={`h-2 w-${current}/${total} rounded-full bg-[${colorBar}]`} />
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;