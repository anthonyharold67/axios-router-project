import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchUser = ({handleChange}) => {
  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <Form.Control
          type='search'
          onChange={handleChange}
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      </div>
    </div>
  )
}

export default SearchUser