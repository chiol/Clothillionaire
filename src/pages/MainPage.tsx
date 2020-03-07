import React from 'react'
import { Navbar, Nav, Form, Button, FormControl, Container, Row, Carousel, Image, Card, Col } from 'react-bootstrap'
import img1 from '../static/img/temp1.png'
import img2 from '../static/img/temp2.png'
import img3 from '../static/img/temp3.png'
import img4 from '../static/img/temp4.png'
import img5 from '../static/img/temp5.png'
const MainPage = () => {
    let imgs:Array<string> = [img1, img2, img3, img4, img5];
    let temp:Array<Array<string>> = []
    const a = () => {
        for (let index = 0; index < imgs.length; index++) {
            temp.push(imgs.splice(-3));
        }
        temp.push(imgs)
    }
    a();
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#ABOUT">ABOUT</Nav.Link>
                        <Nav.Link href="#STYLE">STYLE</Nav.Link>
                        <Nav.Link href="#BEST">BEST</Nav.Link>
                        <Nav.Link href="#CLOSET">CLOSET</Nav.Link>
                        <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Container style={{ maxWidth: "720px" }}>
                {/* <div className="border d-flex flex-row ov" style={{ maxWidth: "720px", height: "200px", overflow: "auto" }}>
                    <Image src={img1} />
                    <Image src={img2} />
                    <Image src={img3} />
                    <Image src={img4} />
                    <Image src={img5} />
                    <Image src={img5} />
                    <Image src={img5} />
                </div> */}
                {
                    temp.map((temp2) => {
                        return (
                            <Row className="justify-content-start">
                                {
                                    temp2.map((img) => {
                                        return(
                                            <Col className="col-4">
                                                 <Card>
                                                     <Card.Header></Card.Header>
                                                     <Card.Body>
                                                         <Row>
                                                             <Col>
                                                                 <Card.Img src={img}></Card.Img>
                                                             </Col>
                                                             <Col>
                                                                 <Card.Text>makdsfjlksdjfl</Card.Text>
                                                             </Col>
                                                         </Row>
                                                     </Card.Body>
                                                     <Card.Footer></Card.Footer>
                                                 </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        )
                    })
                    
                }



            </Container>
        </>
    )
}

export default MainPage
