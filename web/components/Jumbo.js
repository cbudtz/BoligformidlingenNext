import {Jumbotron} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";

export default function Jumbo({imageurl, text}){
    const  [windowWidth, setWindowWidth] = useState(2000)
    useEffect(()=>{
        const handleResize = ()=>setWindowWidth(window.innerWidth)
        window && window.addEventListener('resize',handleResize);
        console.log("adding listener")
        return()=>{window.removeEventListener('resize', handleResize);console.log("removing listener")}
    })
    if (windowWidth<640 && imageurl?.formats?.small){
        imageurl = imageurl.formats.small;
    } else if (windowWidth<768 && imageurl?.formats?.medium){
        imageurl = imageurl.formats.medium;
    } else if (windowWidth<1024 && imageurl?.formats?.large){
        imageurl = imageurl.formats.large;
    } else if (windowWidth<1920 && imageurl?.formats?.xlarge) {
        imageurl = imageurl.formats.xlarge;
    }
    const smallwindow = windowWidth<640;
    return(


    <Jumbotron fluid style={{
        minHeight: smallwindow ? 400:600,
        backgroundImage: "url('"+ getStrapiMedia(imageurl)+ "')",
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