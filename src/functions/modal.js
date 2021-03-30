import { useState } from "react";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    function opens() {
        setIsOpen(!isOpen);
    }
    return { isOpen, opens };
};

export default Modal;