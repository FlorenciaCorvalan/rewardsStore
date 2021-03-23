import { useState } from "react";

const modal = () => {
    const [clicka, setClicka] = useState(false);
    function opens() {
        setClick(!clicka);
    }
    return { clicka, opens };
};

export default modal