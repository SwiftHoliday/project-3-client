import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTopic: "" };
    }

    render() {
        return (
            <div className="Page">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder="Search What's New"
                            type="search"
                            name="topic"
                            input="text"
                            value={this.state.searchTopic}
                            onChange={this.handleChange}
                        />
                        <Button type="submit">Go!</Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}


export default SearchBar;