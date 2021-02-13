import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Team.scss';

class TeamMember extends Component {
  
  
  componentDidMount() {
    window.AOS.init();
  }
  
  render() {
    const { member, index } = this.props
    const features = member.features || []
    return (
      <Card className="team-member" style={{ border: 'none', marginBottom: '30px' }} data-aos="slide-up" data-aos-duration="800" data-aos-delay={index * 100}>
        {/*<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />*/}
        <Card.Body className="list-title">
          <Card.Title>{member.name}</Card.Title>
          {member.desc && <Card.Text>
            {member.desc}
          </Card.Text>}
        </Card.Body>
        <div className="list-group-details">
          <Card.Body className="list-title">
            <Card.Title><b>{member.name}</b></Card.Title>
            {member.desc && <Card.Text>
              {member.desc}
            </Card.Text>}
          </Card.Body>
          <ListGroup className="list-group-flush">
            {features.map((feature, index) => <ListGroupItem key={index}>{feature}</ListGroupItem>)}
          </ListGroup>
        </div>
        {/*<Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>*/}
      </Card>
    );
  }
}

export default TeamMember;
