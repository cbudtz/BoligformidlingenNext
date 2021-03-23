import {Col, Container, Row} from "react-bootstrap";
import {getStrapiMedia} from "../lib/media";
import MarkDown from "./MarkDown";
import React, {useState} from "react";
import {resolveImage, useWindow} from "../lib/window";

export default function RoundImagesWText({element}){
    const [windowWidth,setWindowWidth] = useState(2000)
    useWindow(setWindowWidth);
    const colWidth = windowWidth >= 992 ? 349: (windowWidth > 768 ? windowWidth/2:windowWidth);
    return <Container>
        <Row>
            <Col sm={4} style={{textAlign:"center"}}>
                {element?.image1 &&
                    <img style={{maxWidth:150, maxHeight:150,borderRadius:"50%"}} src={getStrapiMedia(element.image1)} alt={element.image1.name}/>
                }
                <MarkDown>{element?.text1}</MarkDown>
            </Col>
            <Col sm={4} style={{textAlign:"center"}}>
                {element?.image2 &&
                    <img style={{maxWidth:150, maxHeight:150,borderRadius:"50%"}} src={getStrapiMedia(element.image2)} alt={element.image2.name}/>
                }
                <MarkDown>{element?.text2}</MarkDown>
            </Col>
            <Col sm={4} style={{textAlign:"center"}}>
                {element?.image3 &&
                    <img style={{maxWidth:150, maxHeight:150,borderRadius:"50%"}} src={getStrapiMedia(element.image3)} alt={element.image3.name}/>
                }
                <MarkDown>{element?.text3}</MarkDown>
            </Col>
        </Row>

    </Container>
}