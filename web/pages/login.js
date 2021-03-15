import {Container, Row, Col, Form, Button} from "react-bootstrap";
import React from "react";
import {Formik} from "formik";
import {postAPI} from "../lib/api";


function Login() {
    let validate = (values)=>{
        const errors = {};
        if (!values.email){
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Invalid email";
        }
        return errors;
    };
    let onSubmit = (values, {resetForm})=>{
        resetForm({values:""})
        postAPI("admin/login",values).then((json)=>{
            console.log(json);
        })
    }

    return (
        <Container>
            <Row>
                <Col md={4} offset={4}>
                    <hr/>
                    <Formik
                        initialValues={{email:"",password:""}}
                        validate={validate}
                        onSubmit={onSubmit}
                    >
                        {
                            ({
                                 values,
                                 errors,
                                 touched,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit, isSubmitting
                             })=>(
                                <>
                                    <Form.Group>
                                        <Form.Label>email</Form.Label>
                                        <Form.Control type={"email"} name={"email"}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.email}
                                                      isValid={touched.email && !errors.email}
                                                      isInvalid={touched.email && !!errors.email}
                                        />
                                        <Form.Control.Feedback type={"invalid"}>{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>password</Form.Label>
                                        <Form.Control type={"password"} name={"password"}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={values.password}
                                                      isValid={touched.password && !errors.password}
                                                      isInvalid={touched.password && !!errors.password}
                                        />
                                        <Form.Control.Feedback type={"invalid"}>{errors.password}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button disabled={isSubmitting} variant={"primary"} onClick={handleSubmit}>
                                        Login
                                    </Button>
                                </>
                            )

                        }

                    </Formik>

                </Col>
            </Row>

        </Container>

    )}

export default Login;