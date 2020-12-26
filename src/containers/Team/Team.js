import React, { Component } from 'react';
import {CardDeck} from 'react-bootstrap'
import './Team.scss';
import TeamMember from "./TeamMember";

const members = [
  {
    name: 'M S Nagar',
    desc: 'Advocate, Founding Partner',
    features: ['Chairman- FCCI', 'President - NCR Employers Association', '33+ years of experience']
  },
  {
    name: 'Mohit Nagar',
    desc: 'Advocate, Managing Partner',
    features: ['LL.M. (Cardiff University, U.K.)', 'Specialization in Company and Commercial Laws- NCLT, NCLAT, CESTAT, High Courts and Supreme Court']
  },
  {
    name: 'Deepanshu Nagar',
    features: ['B.Tech. (CSE) VIT University', 'LL.M. specializing in Intellectual Property and cyber laws (Queen Mary, London)']
  },
  {
    name: 'Dimple Nagar',
    desc: 'Advocate, Partner',
    features: ['B.A', 'LL.B']
  },
  {
    name: 'Anil Bhardwaj',
    features: ['Specialisation in criminal laws', '33+ years of experience']
  },
  {
    name: 'Renu Agarwal',
    desc: 'Advocate',
    features: ['Former Vice President, District Bar Association, Tis Hazari', '30+ years of experience']
  },
  {
    name: 'Pushpender Yadav',
    features: ['Ex. Judicial Officer, Haryana']
  },
  {
    name: 'Ajit Rajora',
    desc: 'Advocate'
  },
  {
    name: 'S B Kaushik',
    desc: 'Expert in GST',
    features: ['Excise with over 30 years of experience']
  },
  {
    name: 'Damini Kaushik',
    desc: 'Chartered Accountant'
  },
]
class Team extends Component {
    render() {
        return (
            <div className="team">
              <CardDeck>
                {members.map((member, index) => <TeamMember index={index} member={member} key={index}/>)}
              </CardDeck>
            </div>
        );
    }
}

export default Team;
