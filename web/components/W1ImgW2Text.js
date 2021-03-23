import {Col, Container, Row} from "react-bootstrap";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";
import React,{useState} from "react";
import {resolveImage, useWindow} from "../lib/window";

export default function W1ImgW2Text({element}){
    const [windowWidth, setWindowWidth] = useState(2000);
    useWindow(setWindowWidth);
    const colWidth = windowWidth >= 992 ? 349: (windowWidth > 768 ? windowWidth/2:windowWidth) ;
    return <Container>
        <Row>
            {element.imageplace==="right" &&
            <Col lg={8} md={6}><MarkDown>{element?.text}</MarkDown></Col>
            }
            <Col lg={4} md={6}>
                <img width={"100%"} alt={element.image.name} src={getStrapiMedia(resolveImage(colWidth,element?.image))}/>
            </Col>
            {element.imageplace !== "right" &&
            <Col lg={8} md={6}><MarkDown>{element?.text}</MarkDown></Col>
            }
        </Row>
    </Container>
}