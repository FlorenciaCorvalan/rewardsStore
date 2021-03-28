import React, { useEffect, useState } from "react";
import { Redeemed } from "./Redeemed";
import { headers, historyUrl } from "../../Context/context";

export default function Container(){
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fecthHistory = async () => {
            setLoading(true);
            const response = await fetch(historyUrl, { method: "GET", headers });
            const data = await response.json();
            setHistory(data);
            setLoading(false);
        };
        fecthHistory();
    }, []);

    return(
        <div>
            <Redeemed loading={loading} />
        </div>
    );
}
