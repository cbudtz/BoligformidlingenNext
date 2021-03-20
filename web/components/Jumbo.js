import {Jumbotron} from "react-bootstrap";
import React, {useState} from "react";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";
import {useWindow, resolveImage} from "../lib/window";


export default function Jumbo({imageurl: image, text}){
    const  [windowWidth, setWindowWidth] = useState(2000)
    useWindow(setWindowWidth);
    image = resolveImage(windowWidth, image);
    const smallwindow = windowWidth<640;
    return(
    <Jumbotron fluid style={{
        minHeight: smallwindow ? 400:600,
        backgroundImage: "url('"+ getStrapiMedia(image)+ "')",
        backgroundRepeat: "space",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}>
        {text &&
        <div style={{
            backgroundColor: "rgba(255,255,255,0.90)",
            width: 360, height: 30, padding: 45, margin:"0 auto",
            borderRadius: 999, position: "relative",
            textAlign: "center"
        }}>
            <MarkDown>{text}</MarkDown>
        </div>
        }


    </Jumbotron>
)
}