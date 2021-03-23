import Jumbo from "./Jumbo";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MarkDown from "./MarkDown";
import W1ImgW2Text from "./W1ImgW2Text";
import W1ImagesW2Text from "./W1ImagesW2Text";
import RoundImagesWText from "./RoundImagesWText";
import CenteredCols3 from "./CenteredCols3";

export default function PageContent({contents: array}){
    if (!array?.map) {console.log(array); return <></>}
    return(
        <>
            {array?.map((element,key)=>{
                const componentType = element.__component.split(".")[1]
                if (componentType==="jumbotron"){
                    return <Jumbo key={key} imageurl={element.image} text={element.text}/>
                } else if (componentType==="fullwidthtext") {
                    return <Container key={key}><Row><Col style={{textAlign:element.centered?"center":""}} ><MarkDown>{element.text}</MarkDown></Col></Row></Container>
                } else if (componentType==="1wideimage2widetext"){
                    return <W1ImgW2Text key={key} element={element}/>
                } else if (componentType==="1w-images2w-text"){
                    return <W1ImagesW2Text key={key} element={element}/>
                } else if (componentType==="3round-images-w-text"){
                    return <RoundImagesWText key={key} element={element}/>
                } else if (componentType==="3centered-cols"){
                    return <CenteredCols3 key={key} element={element} />
                }
            })}
        </>
    )

}