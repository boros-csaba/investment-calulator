import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Inputs() {

    return (
        <div class="inputs-container">
            <FloatingLabel label="Starting amount">
                <Form.Control type="number" />
            </FloatingLabel>
            <FloatingLabel label="Additional contribution">
                <Form.Control type="number" />
            </FloatingLabel>
            <FloatingLabel label="Rate of return">
                <Form.Control type="number" />
            </FloatingLabel>
            <FloatingLabel label="Years to grow">
                <Form.Control type="number" />
            </FloatingLabel>
        </div>
    )
}

export default Inputs;