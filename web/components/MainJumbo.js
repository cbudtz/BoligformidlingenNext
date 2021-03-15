import {Jumbotron} from "react-bootstrap";
import React from "react";


export default function MainJumbo(props) {
    return <Jumbotron fluid style={{
        minHeight: 600,
        backgroundImage: "url('/images/strandgade4.jpg')",
        backgroundRepeat: "space",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}
    >
        <div style={{
            backgroundColor: "rgba(255,255,255,0.90)",
            width: 360, height: 360, padding:"25px 45px 25px 45px", margin:"0 auto",
            borderRadius: 999, position: "relative",
            textAlign: "center"
        }}>
            {props.children}

        </div>

    </Jumbotron>;
}