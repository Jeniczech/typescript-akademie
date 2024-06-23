import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useRef } from 'react';
import classes from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    onClose: (() => void) | null;
}
export const Modal = ({ children, open, onClose }: ModalProps) => {
    const dialog = useRef<HTMLDialogElement>(null!);

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else dialog.current.close();
    }, [open]);

    const modalRoot = document.getElementById('modal');

    if (!modalRoot) {
        console.error('The element with id "modal" was not found in the DOM.');
        return null;
    }

    return createPortal(
        <dialog
            className={classes.modal}
            ref={dialog}
            onClose={onClose ? onClose : undefined}
        >
            {children}
        </dialog>,
        modalRoot
    );
};
