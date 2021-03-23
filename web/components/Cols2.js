import {Col, Container, Row} from "react-bootstrap";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";
import React, {useState} from "react";
import {resolveImage, useWindow} from "../lib/window";

export default function CenteredCols3({element}){
    const [windowWidth,setWindowWidth] = useState(2000)
    useWindow(setWindowWidth);
    const colWidth = windowWidth >= 992 ? 349: (windowWidth > 768 ? windowWidth/2:windowWidth) ;
    return <Container>
        <Row>
            <Col sm={element.colwidth} style={{textAlign:"center"}}>
                <MarkDown>{element?.col1}</MarkDown>
            </Col>
            <Col sm={element.offset}/>
            <Col sm={element.colwidth} style={{textAlign:"center"}}>
                <MarkDown>{element?.col2}</MarkDown>
            </Col>
        </Row>

    </Container>
}