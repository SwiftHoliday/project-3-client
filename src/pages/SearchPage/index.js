import './SearchPage.css';
import { render } from '@testing-library/react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsTools } from 'react-icons/bs';

function handleSearch(props) {

render()  
return (
        <main>
            <div className="Page">
                <div className="globe3">
                    </div>
                        <div className="SearchText">
                            <p>Coming Soon!</p>
                        </div> 
                <Form inline>
                    <Form.Control
                        class="input"
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2" />
                    <Button type="submit">Go!</Button>
                </Form> 
                <BsTools size="8.5em" color="red" />
            </div>
        </main>
    );
}

export default handleSearch;