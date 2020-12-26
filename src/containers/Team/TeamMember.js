import React, { Component } from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import './Team.scss';

const boxShadow = '0 2px 10px -1px rgba(0,0,0,0.1)'

class TeamMember extends Component {
  
  
  componentDidMount() {
    window.AOS.init();
  }
  
  render() {
    const {member, index} = this.props
    const features = member.features || []
    return (
      <Card style={{ border: 'none', flexBasis: '200px', alignSelf: 'baseline', marginBottom: '30px', boxShadow }} data-aos="slide-up" data-aos-duration="800" data-aos-delay={index * 100}>
        {/*<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />*/}
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          {member.desc && <Card.Text>
            {member.desc}
          </Card.Text>}
        </Card.Body>
        <ListGroup className="list-group-flush">
          {features.map((feature, index) => <ListGroupItem key={index}>{feature}</ListGroupItem>)}
        </ListGroup>
        {/*<Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>*/}
      </Card>
    );
  }
}

export default TeamMember;
