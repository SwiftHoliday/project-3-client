import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function SearchBar(props) {
    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            search: ""
        }
    }



    
    return (
        <div className="Page">

<Form inline>
    <Form.Control
        type="text"
        placeholder="Search"
        className=" mr-sm-2" />
    <Button type="submit">Search</Button>
  </Form>
    </div>
)
}

export default SearchBar