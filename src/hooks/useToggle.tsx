import { useCallback, useState } from "react";

interface useToggleProps {
    onCloseAction?: () => void
}

const useToggle = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const onToggle = useCallback(() => {
        setVisible((prevStatus) => !prevStatus);
        // if (status && onCloseAction) onCloseAction();
    }, []);

    const onOpen = useCallback(() => {
        setVisible(true);
    }, []);

    const onClose = useCallback(() => {
        setVisible(false);
        // onCloseAction && onCloseAction()
    }, []);

    return { visible, onOpen, onClose, onToggle, setVisible } as const;
};

export default useToggle;