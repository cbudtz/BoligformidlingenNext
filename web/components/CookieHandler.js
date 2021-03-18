import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";

function CookieHandler(){
    const [showModal, setShowmodal] = useState(true);
    useEffect(()=>{
        const boligformidlingen = JSON.parse(localStorage.getItem("boligformidlingen"));
    })

    return (<></>
        )
}

export default CookieHandler;