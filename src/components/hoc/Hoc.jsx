import { Fragment } from "react"
import SidebarC from "../common/SidebarC"
import { Col, Container, Row } from "reactstrap"
import HeaderC from "../common/HeaderC"

export const Hoc = (Component) => {
    const NewComponent = () => {
        return (
            <Fragment>
                <Container fluid>
                    <Row>
                        <Col xs={2} >
                            <SidebarC />
                        </Col>
                        <Col xs={10} >
                            <HeaderC />
                            <Component />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
    return NewComponent
}