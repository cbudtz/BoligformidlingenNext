import Head from 'next/head'
import {fetchAPI, postAPI} from "../lib/api";
import React, {useState} from "react";
import {Container, Form,Button} from "react-bootstrap";
import TopBar from "../components/TopBar";
import {Formik} from "formik";
import Footer from "../components/Footer";

function Contact({properties,pagemeta}) {
    const [submitted, setSubmitted] = useState(false)
    return (
        <div>
            <Head>
                <title>{pagemeta?.title}</title>
                <meta name={"description"} content={pagemeta?.description}/>
                <meta name={"keywords"} content={pagemeta?.keywords}/>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href={"/fonts/font-awesome.min.css"}/>
                <script src={"https://www.googletagmanager.com/gtag/js?id=UA-137703064-1"}/>
                <script src={"/linkedin.js"}/>
                <script src={"/fbpix.js"}/>
                <script src={"/googleAnalytics.js"}/>
                <script src={"https://www.google.com/recaptcha/api.js?render=6LepWk4aAAAAABnZBToPJ4HctBd2IaodkpsYbF2x"}/>
            </Head>

            <main>
                <TopBar properties={properties}/>
                <Container>
                    <hr/>
                    <h3>Feel free to contact us</h3>
                    <Formik
                        initialValues={{email:"", text:"",phone:""}}
                        validate={values =>  {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid Email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values,{resetForm})=>{
                            console.log(values)
                            resetForm({values:""});
                            setSubmitted(true);
                            grecaptcha.ready(function(){
                                console.log("grecaptcha Ready")
                                grecaptcha.execute('6LepWk4aAAAAABnZBToPJ4HctBd2IaodkpsYbF2x', {action:"submit"})
                                    .then(function(token){
                                        console.log("Got recaptcha token")
                                        values.token = token;
                                        postAPI("mail/rent",values);
                                    }).catch((data)=>{
                                        console.log("Something went wrong")
                                })
                            })

                            setTimeout(()=>setSubmitted(false),3000);
                        }}>
                        {(
                            {
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit, isSubmitting
                            }
                        )=>(
                            <>
                                <Form.Group>
                                    <Form.Label>Your email address</Form.Label>
                                    <Form.Control type={"email"} name={"email"}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.email}
                                                  isValid={touched.email && !errors.email}
                                                  isInvalid={touched.email &&!!errors.email}
                                    />
                                                  <Form.Control.Feedback type={"invalid"}>{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your phonenumber</Form.Label>
                                    <Form.Control type={"phone"} name={"phone"}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.phone}
                                                  isValid={touched.phone && !errors.phone}
                                                  isInvalid={touched.phone &&!!errors.phone}
                                    />
                                                  <Form.Control.Feedback type={"invalid"}>{errors.phone}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your message</Form.Label>
                                    <Form.Control type={"textarea"} name={"text"}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.text}
                                                  as={"textarea"}
                                                  rows={5}
                                    />
                                </Form.Group>
                                <Button disabled={isSubmitting} variant={"primary"} onClick={handleSubmit}>
                                    Send Message
                                </Button>
                                <hr/>
                                {submitted && <h5>Thank you for your inquiry, we will return to you shortly. </h5>}
                            </>
                        )}


                    </Formik>

                </Container>
                <Footer/>
            </main>

        </div>
    )
}

export async function getServerSideProps(context){
    let propertiestask =  fetchAPI("properties");
    let pagemetatask =  fetchAPI("pagemetas?key=contact");
    const pagemeta = await pagemetatask
    return {props:{properties:await propertiestask, pagemeta: pagemeta && pagemeta[0]}}
}

export default Contact;