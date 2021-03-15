import {Jumbotron} from "react-bootstrap";
import React from "react";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";

export default function Jumbo({imageurl, text}){ return(
    <Jumbotron fluid style={{
        minHeight: 600,
        backgroundImage: "url('"+ getStrapiMedia(imageurl)+ "')",
        backgroundRepeat: "space",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}>
        {text &&
        <div style={{
            backgroundColor: "rgba(255,255,255,0.90)",
            width: 360, height: 360, padding: 45, margin:"0 auto",
            borderRadius: 999, position: "relative",
            textAlign: "center"
        }}>
            <MarkDown>{text}</MarkDown>
        </div>
        }


    </Jumbotron>
)
}