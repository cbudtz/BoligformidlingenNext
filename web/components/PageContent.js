import Jumbo from "./Jumbo";
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import MarkDown from "./MarkDown";
import {getStrapiMedia} from "../lib/media";

export default function PageContent({contents: array}){
    if (!array?.map) {console.log(array); return <></>}
    return(
        <>
            {array?.map((element,key)=>{
                const componentType = element.__component.split(".")[1]
                if (componentType==="jumbotron"){
                    return <Jumbo key={key} imageurl={element.image} text={element.text}/>
                } else if (componentType==="fullwidthtext") {
                    return <Container key={key}><Row><Col><MarkDown>{element.text}</MarkDown></Col></Row></Container>
                } else if (componentType==="1wideimage2widetext"){
                    if (element?.imageplace==="right"){
                        return <Container key={key}><Row><Col></Col></Row></Container>
                    } else {
                        return <Container key={key}>
                            <Row>
                                <Col lg={4} md={6}>
                                    <img width={"100%"} alt="image" src={getStrapiMedia(element?.image)}/>
                                </Col>
                                <Col lg={8} md={6}><MarkDown>{element?.text}</MarkDown></Col>
                            </Row>
                        </Container>
                    }
                } else if (componentType==="1w-images2w-text"){
                    return <Container key={key}>
                        <Row>
                            <Col lg={4} md={6}>

                                {element?.images?.map((image)=>{
                                    return <img width={image.width +"%"} src={getStrapiMedia(image.image)}/>
                                })}
                            </Col>
                            <Col lg={8} md={6}><MarkDown>{element?.text}</MarkDown></Col>
                        </Row>

                    </Container>
                }
            })}
        </>
    )

}