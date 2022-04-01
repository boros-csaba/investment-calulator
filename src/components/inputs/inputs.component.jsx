import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import './inputs.component.scss';

function Inputs() {

    return (
        <div class="inputs-container">
            <Form>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Starting amount</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="number"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Additional contribution</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="number"></Form.Control>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Frequency</Form.Label>
                        <Form.Select default="Monthly">
                            <option>Weekly</option>
                            <option>Bi-weekly</option>
                            <option>Monthly</option>
                            <option>Semi-anually</option>
                            <option>Anually</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Rate of return</Form.Label>
                        <InputGroup>
                            <Form.Control type="numer"></Form.Control>
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Years</Form.Label>
                        <InputGroup>
                            <Form.Control type="numer"></Form.Control>
                            <InputGroup.Text>yrs.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default Inputs;