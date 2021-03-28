import { useState } from "react";

const Modal = () => {
    const [clicka, setClicka] = useState(false);
    function opens() {
        setClicka(!clicka);
    }
    return { clicka, opens };
};

export default Modal;