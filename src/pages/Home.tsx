import { Form } from "react-bootstrap"

const HomePage = () => {
    return (
        <>
        <div id="HomePage">
        <h1>
            Welcome to our exercise recommender
        </h1>
        <p>
        <b>
            Please enter your exercise in the below field:
        </b>
        </p>
        <Form>
            <Form.Group className="mb-3 p-5" controlId="exercise.ControlInput">
            <Form.Label>Input an exercise</Form.Label>
            <Form.Control type="inputfield" placeholder="Input an exercise"/>
            </Form.Group>
        </Form>
        </div>
        </>
    )
}

export default HomePage