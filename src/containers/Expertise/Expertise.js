import React, {Component} from 'react';
import {Accordion, Card, ListGroup} from 'react-bootstrap'
import './Expertise.scss';


class Expertise extends Component {

  render() {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Labour and Employment Laws
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className='subText'>
                The firm has established itself as an eminent practitioner in Labour and Employment laws. The firm boasts of a specialized team of lawyers and compliance officers who advise and assist companies like Linde, TATA, Krishna Maruti, Daikin, Whirlpool, etc. regularly for the following:
              </div>
              <ListGroup variant="flush">
                <ListGroup.Item>Employment Strategy and Documentation</ListGroup.Item>
                <ListGroup.Item>Identifying of applicable labour laws legislations applicable to clients’ Industry to complying with the same</ListGroup.Item>
                <ListGroup.Item>Employee Benefit & Compensation Structuring</ListGroup.Item>
                <ListGroup.Item>Drafting and phrasing of third-party agreements for providing contract labour</ListGroup.Item>
                <ListGroup.Item>Advisory on retrenchment and/or termination</ListGroup.Item>
                <ListGroup.Item>Conduct HR Compliances</ListGroup.Item>
                <ListGroup.Item>Conducting Domestic Enquiries</ListGroup.Item>
                <ListGroup.Item>Employment Litigation including advice on strategy to amicably resolve the Industrial Dispute</ListGroup.Item>
                <ListGroup.Item>Non-Disclosure Agreements</ListGroup.Item>
                <ListGroup.Item>Confidentiality Agreements</ListGroup.Item>
                <ListGroup.Item>Non-compete Agreements</ListGroup.Item>
                <ListGroup.Item>Downsizing</ListGroup.Item>
                <ListGroup.Item>Closure of Industrial Units</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Criminal Litigation
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className='subText'>
                Areas of practice includes
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Corporate Insolvency disputes</ListGroup.Item>
              <ListGroup.Item>Domestic arbitration</ListGroup.Item>
              <ListGroup.Item>Environment related matters</ListGroup.Item>
              <ListGroup.Item>Finance and Securities Litigation</ListGroup.Item>
              <ListGroup.Item>Insurance Disputes</ListGroup.Item>
              <ListGroup.Item>Labour litigation</ListGroup.Item>
              <ListGroup.Item>Real Estate Litigation</ListGroup.Item>
              <ListGroup.Item>Recovery proceedings</ListGroup.Item>
              <ListGroup.Item>Shareholders Dispute including Oppression and Mismanagement</ListGroup.Item>
              <ListGroup.Item>Drafting arbitration agreements</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Dispute Resolution and Arbitration
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className='subText'>
                The firm has extensive experience in representing clients in criminal matters including the following:
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>White Collar Crimes/Economic Offences</ListGroup.Item>
              <ListGroup.Item>Department of Company Affairs-Serious Frauds Investigation office</ListGroup.Item>
              <ListGroup.Item>Bank/Financial Institutions Frauds</ListGroup.Item>
              <ListGroup.Item>Dishonor of Cheques</ListGroup.Item>
              <ListGroup.Item>Quashing of FIRs, Bails, Trial</ListGroup.Item>
              <ListGroup.Item>Criminal Complaints</ListGroup.Item>
              <ListGroup.Item>Criminal Writs/Revisions/Appeals</ListGroup.Item>
              <ListGroup.Item>Defamation Cases</ListGroup.Item>
              <ListGroup.Item>Prevention of Money Laundering Act</ListGroup.Item>
              <ListGroup.Item>Prevention of Corruption Act</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Intellectual Property Rights
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className='subText'>
                The team advises and assists clients on:
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Protection and prosecution of IP rights (including Patents, Trademarks, Design Rights, Copyrights, Geographical Indications, Domain Names, proprietary know how and business processes)</ListGroup.Item>
              <ListGroup.Item>Registration and opposition of trademarks</ListGroup.Item>
              <ListGroup.Item>Patent filings and prosecution</ListGroup.Item>
              <ListGroup.Item>IP due diligence and audits</ListGroup.Item>
              <ListGroup.Item>IP acquisition, transfer and related agreements</ListGroup.Item>
              <ListGroup.Item>Drafting and negotiating various IP agreements including license agreements</ListGroup.Item>
              <ListGroup.Item>Litigation and enforcement</ListGroup.Item>
              <ListGroup.Item>Domain name registrations and maintenance</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Anti-Trust and Competition
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div className='subText'>
                The Corporate team advises on range of competition issues including:
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Cartels and anti-trust investigation</ListGroup.Item>
              <ListGroup.Item>Abuse of dominant position</ListGroup.Item>
              <ListGroup.Item>Commercial agreements</ListGroup.Item>
              <ListGroup.Item>Competition law compliance strategies</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Corporate Practice
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <div className='subText'>
                The firm has a dedicated team of lawyers and other professionals to provide services to any corporate entity right from the inception to dissolution.
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Mergers and Acquisition</ListGroup.Item>
              <ListGroup.Item>Takeovers</ListGroup.Item>
              <ListGroup.Item>Winding p</ListGroup.Item>
              <ListGroup.Item>CorporateRestructuring</ListGroup.Item>
              <ListGroup.Item>Industry specific liceses</ListGroup.Item>
              <ListGroup.Item>Regulatory Compliances</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            Insolvency and bankruptcy Practice
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <div className='subText'>
                Our expertise covers legal and commercial advice on matters including:
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Negotiations with creditors for settlements and restructuring</ListGroup.Item>
              <ListGroup.Item>Liquidations/Winding up</ListGroup.Item>
              <ListGroup.Item>Out-of-court restructurings and refinancing</ListGroup.Item>
              <ListGroup.Item>Financial Restructuring of Debts Reorganization through Strategic Debt Restructuring</ListGroup.Item>
              <ListGroup.Item>Insolvency filing requirements</ListGroup.Item>
              <ListGroup.Item>Formal insurance /liquidation/ bankruptcy proceedings before the court (NCLT/ DRT /NCLAT/Supreme Court) through Insolvency and bankruptcy Code 2016
              </ListGroup.Item>
              <ListGroup.Item>Debt Recovery Tribunal (DRT) including those under the Securitization and Reconstruction of Financial Assets and Enforcement of Security interest Act 2002 (SARFAESI)
              </ListGroup.Item>
              <ListGroup.Item>Financial Due Diligence</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            Real Estate
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <div className='subText'>
                The services include
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Mergers and Acquisition</ListGroup.Item>
              <ListGroup.Item>Takeovers</ListGroup.Item>
              <ListGroup.Item>Winding p</ListGroup.Item>
              <ListGroup.Item>CorporateRestructuring</ListGroup.Item>
              <ListGroup.Item>Industry specific liceses</ListGroup.Item>
              <ListGroup.Item>Regulatory Compliances</ListGroup.Item>
              </ListGroup>
              </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            Corporate Practice
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <div className='subText'>
                The services include
              </div>
              <ListGroup variant="flush">
              <ListGroup.Item>Regulatory laws including those relating to licenses and approvals</ListGroup.Item>
              <ListGroup.Item>Structuring of transaction</ListGroup.Item>
              <ListGroup.Item>Stamp Duty</ListGroup.Item>
              <ListGroup.Item>Change of land use</ListGroup.Item>
              <ListGroup.Item>Regulations governing acquisitions and sale of property</ListGroup.Item>
              <ListGroup.Item>Construction Contracts, Joint Development Agreements Project Management Consultancy Agreement etc.</ListGroup.Item>
              <ListGroup.Item>Grant/Assignment offline licensing of commercial and residential properties</ListGroup.Item>
              <ListGroup.Item>Due diligence and preparation of Title Search Reports</ListGroup.Item>
              </ListGroup>
              </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
/*Labour and Employment Laws	Corporate Practice
Criminal Litigation	Insolvency and bankruptcy Practice
Dispute Resolution and Arbitration	Real Estate
Intellectual Property Rights	Anti-Trust and Competition*/
export default Expertise;
