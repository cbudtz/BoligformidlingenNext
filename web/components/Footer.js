import {Col, Row, Container} from "react-bootstrap";
import React from "react";
import {useRouter} from "next/router";


function Footer({pagematerials}){
    let router= useRouter();
    const footerText = pagematerials?.find((page)=>page.key==="footertext")
    const socialicon = {fontSize:29,border:1,borderStyle:"solid",borderColor:"#ccc", borderRadius:"50%",
        display:"inline-block",width:"40px",height:"40px", marginLeft:"20px", lineHeight:"40px",textAlign:"center"};
    return  (<>
        <Container>
        <hr/>
        <Row>
            <Col md={4} >
                <img width={210} height={63} src={"/images/boligformidlingen.png"}/>
                <p>
                    Holmebjerg 21<br/>
                    DK - 2950 Vedbæk<br/>
                    +45 60931453<br/>
                    <a href={"mailto:udlej@boligformidlingen.com"}>udlej@boligformidlingen@com</a>
                </p>

            </Col>
            <Col md={8}>
                <a  style={socialicon} href={"https://www.instagram.com/boligformidlingen/"}>
                    <i style={{width:40,height:40}} className={"fa fa-instagram"}/></a>
                <a style={socialicon} href={"https://www.facebook.com/boligformidlingen"}>
                    <i style={{width:40,height:40}} className={"fa fa-facebook"}/>
                </a>
                <a style={socialicon} href="https://www.linkedin.com/company/boligformidlingen/">
                    <i style={{width:40,height:40}} className="fa fa-linkedin"/>
                </a>

            </Col>
        </Row>
    </Container>
        <Container fluid>
            <hr/>
            <Row>
                <Col>
                    <blockquote>
                        <p>
                            <em>
                                {footerText?.text}
                            </em>
                        </p>
                    </blockquote>
                </Col>
            </Row>
        </Container>
        </>)

}

export default Footer;