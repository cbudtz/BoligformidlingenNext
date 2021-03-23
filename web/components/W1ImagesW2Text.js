import {Col, Container, Row} from "react-bootstrap";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";
import React, {useState} from "react";
import {resolveImage, useWindow} from "../lib/window";

export default function W1ImagesW2Text({element}){
    const [windowWidth,setWindowWidth] = useState(2000)
    useWindow(setWindowWidth);
    const colWidth = windowWidth >= 992 ? 349: (windowWidth > 768 ? windowWidth/2:windowWidth) ;
    return <Container>
        <Row>
            <Col lg={4} md={6}>
                {element?.images?.map((image,key)=>{
                    const resimage = resolveImage(colWidth,image.image)
                    return <img key={key} width={image.width +"%"} src={getStrapiMedia(resimage)} alt={resimage.name}/>
                })}
            </Col>
            <Col lg={8} md={6}><MarkDown>{element?.text}</MarkDown></Col>
        </Row>

    </Container>
}