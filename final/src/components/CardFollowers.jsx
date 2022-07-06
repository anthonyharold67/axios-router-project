import React from 'react'
import {Col,Card,Button} from "react-bootstrap"

const CardFollowers = ({follower}) => {
  return (
    <div>
      <Col>
        <Card>
        <Card.Img variant="top" src={follower.avatar_url} />
        <Card.Body>
        <Card.Text>{follower.login}</Card.Text>
        <Button
        href={follower.html_url}
        style={{borderRadius:'50px'}}
        variant="primary">VIEW PROFILE</Button>
        </Card.Body>
        </Card>
      </Col>
    </div>
  )
}

export default CardFollowers