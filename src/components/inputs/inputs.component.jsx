import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { InputsContainer } from './inputs.styles';
import { InputsContext } from '../../contexts/inputs.context';
import { setStartAmount, setAdditionalContribution, setRateOfReturn, setYears, setFrequency } from '../../store/inputs/inputs.action'

function Inputs() {
    const dispatch = useDispatch();
    const { inputs } = useContext(InputsContext);

    const handleInputChange = (event) => {
        switch (event.target.name){
            case 'startAmount':
                dispatch(setStartAmount(event.target.value));
                break;
            case 'additionalContribution':
                dispatch(setAdditionalContribution(event.target.value));
                break;
            case 'frequency':
                dispatch(setFrequency(event.target.value));
                break;
            case 'rateOfReturn':
                dispatch(setRateOfReturn(event.target.value));
                break;
            case 'years':
                dispatch(setYears(event.target.value));
                break;
            default:
                break;
        }
    }

    return (
        <InputsContainer>
            <Form>
                <Row className="mb-3">
                    <Form.Group>
                        <Form.Label>Starting amount</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control name="startAmount" type="number" onChange={handleInputChange} value={inputs.startAmount} min="0" max="100000000"></Form.Control>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Additional contribution</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control name="additionalContribution" type="number" onChange={handleInputChange} value={inputs.additionalContribution} min="0" max="1000000"></Form.Control>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Frequency</Form.Label>
                        <Form.Select name="frequency" default="3" onChange={handleInputChange} value={inputs.frequency}>
                            <option value="1">Weekly</option>
                            <option value="2">Bi-weekly</option>
                            <option value="3">Monthly</option>
                            <option value="4">Semi-anually</option>
                            <option value="5">Anually</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Rate of return</Form.Label>
                        <InputGroup>
                            <Form.Control name="rateOfReturn" type="number" step="0.1" onChange={handleInputChange} value={inputs.rateOfReturn} min="0" max="10000"></Form.Control>
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Years</Form.Label>
                        <InputGroup>
                            <Form.Control name="years" type="number" onChange={handleInputChange} value={inputs.years} min="1" max="100"></Form.Control>
                            <InputGroup.Text>yrs.</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </Row>
            </Form>
        </InputsContainer>
    )
}

export default Inputs;