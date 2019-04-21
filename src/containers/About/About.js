import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './About.scss';
import ReactWOW from "react-wow";
import AnimatingList from "./AnimatingList";

class About extends Component {
  render() {
    return (
        <div className="about">
          <div className="heading">
            <span>ABOUT US</span>
          </div>
          <div className='profile'>
           <ReactWOW animation="fadeIn">
             <p>
               M. S. Nagar & Company Advocates and Solicitors Law Firm is a full service law firm, having repute in the field of law for over three decades. to provide single-window Legal services in the Delhi-NCR region. The firm brings together highly specialized professionals to effectively cater to the Legal requirements of more than 300 Companies as its clientele. We aim to provide a synergetic environment to our clients by understanding the clients’ perspective and needs.
             </p>
             <p>
               M. S. Nagar & Company Advocates and Solicitors Law Firm covers total arena in complete law field in Delhi-NCR region having offices spread across Delhi, Gurugram, Faridabad. The firm through its Partners and Associates ensures high quality pragmatic legal opinions keeping in mind the current trends and latest laws in the industry and market. We also ensure that the clients are kept well informed of industry developments on a regular basis. Our mission is to provide dedicated,
               efficient and commercially sound, result oriented and timely solutions to our Clients.
             </p>
             <p>
               We represent our Clients before various courts, quasi-judicial authorities, and tribunals including (i) Supreme Court of India; (ii) High Courts of various States; (iii) District Courts of States; (iv) Consumer Forums from District to National Level; (v) Debt Recovery Tribunals and Debt Recovery Appellate Tribunals; (vi) National Company Law Tribunals of various States; (vii) National Company Law Appellate Tribunal (ix) National Green Tribunal, (x) The Customs, Excise and Service
               Tax Appellate Tribunal (CESTAT) (xi) Labour Courts and Industrial Tribunals, etc.
             </p>
             <p>Our arena of practice include Corporate and Commercial laws, Corporate Restructuring, Corporate Insolvency and Bankruptcy Laws, Industrial and Employment Laws, Economic Offences, Dispute Resolution, Arbitration and Conciliation, Intellectual Property Laws, Environment Laws, Information Technology Laws, Competition Laws, Consumer Protection Laws, Industrial and Labour Laws, Negotiable Instrument Laws, etc.</p>
             <p>
               Our clientele includes as follows:
               Tata Steel and , Daikin Air Condition, Gates India, Whirlpool India Ltd., Singer India, Linde India (formerly BOC), Norysis Pvt. Ltd., Omaxe Auto Ltd, Sunbeam Casting, Talbros Automotive, Krishna Maruti Group(KML), Lilliput kids wear, Khaitan Pvt., OMP India Ltd, Usha International, Alpha Toyo, Nikko Auto, Instyle Exports, Gupta Exim, etc.
             </p>
           </ReactWOW>

            <AnimatingList head="Practice areas:" desc=" Our expertise covers legal and commercial advice on matters including:">
              <li>Anti-Trust and Competition—The team advises on range of competition issues including:</li>
              <li>Cartels and anti-trust investigation</li>
              <li>Abuse of dominant position</li>
              <li>Commercial agreements</li>
              <li>Competition law compliance strategies</li>
            </AnimatingList>

            <span className="head">Banking and Finance</span>

            <AnimatingList head="Corporate Insolvency and Corporate Restructuring—" desc=" Our expertise covers legal and commercial advice on matters including:">
              <li>Negotiations with creditors for settlements and restructuring</li>
              <li>Out-of-court restructurings and refinancing</li>
              <li>Financial Restructuring of Debts Reorganization through Strategic Debt Restructuring</li>
              <li>Identifying strategic investors</li>
              <li>Debt Acquisition through an Asset Reconstruction Companies</li>
              <li>Insolvency filing requirements</li>
              <li>Formal insurance /liquidation/ bankruptcy proceedings before the court (NCLT/ DRT /NCLAT/Supreme Court) through Insolvency and bankruptcy Code 2016</li>
              <li>Debt Recovery Tribunal (DRT) including those under the Securitization and Reconstruction of Financial Assets and Enforcement of Security interest Act 2002 (SARFAESI)</li>
              <li>Financial Due Diligence</li>
              <li>Liquidations/Winding up</li>
            </AnimatingList>
            <span className="head">Consumer dispute resolution</span>

            <AnimatingList head="Criminal Litigation—" desc="the firm has extensive experience in representing clients in criminal matters including the following:
              White Collar Crimes/Economic Offences">
              <li>Department of Company Affairs-Serious Frauds Investigation office</li>
              <li>Bank/Financial Institutions Frauds</li>
              <li>Dishonor of Cheques</li>
              <li>Quashing of FIRs, Bails, Trial</li>
              <li>Criminal Complaints</li>
              <li>Criminal Writs/Revisions/Appeals</li>
              <li>Defamation Cases</li>
              <li>Prevention of Money Laundering Act</li>
              <li>Prevention of Corruption Act</li>
              <li>Violation of Intellectual Property Rights/Cyber Laws</li>
              <li>Narcotics and Drugs Violation</li>
            </AnimatingList>

            <AnimatingList head="Dispute Resolution and Arbitration-" desc="Areas of practice includes">
              <li>Corporate Insolvency disputes</li>
              <li>Domestic arbitration</li>
              <li>Environment related matters</li>
              <li>Finance and Securities Litigation</li>
              <li>Insurance Disputes</li>
              <li>Labour litigation</li>
              <li>Real Estate Litigation</li>
              <li>Recovery proceedings</li>
              <li>Shareholders Dispute including Oppression and Mismanagement</li>
              <li>Taxation related litigation</li>
            </AnimatingList>
            <span className="head">E-Commerce Transactions</span>
            <span className="head">Environmental Laws</span>
            <span className="head">Information Technology laws</span>
            <AnimatingList head="Intellectual Property Rights-" desc="the team advises and assists clients on:">
              <li>
                Protection and prosecution of IP rights (including Patents, Trademarks, Design Rights, Copyrights, Geographical Indications, Domain Names, proprietary know how and business processes)
              </li>
              <li>Registration and opposition of trademarks</li>
              <li>IP due diligence and audits</li>
              <li>IP acquisition, transfer and related agreements</li>
              <li>Drafting and negotiating various IP agreements including license agreements</li>
              <li>assignment deeds, IP development agreements, etc</li>
              <li>Representing before various authorities, courts and forums on issues relating to</li>
              <li>registration and protection of IP rights</li>
              <li>Domain name registrations and maintenance</li>
            </AnimatingList>
            <AnimatingList head="Labour Laws">
              <li>Employment Strategy and Documentation</li>
              <li>Identifying of applicable labour laws legislations applicable to clients’ Industry to complying with the same</li>
              <li>Employee Benefit & Compensation Structuring</li>
              <li>Drafting and phrasing of third party agreements for providing contract labour</li>
              <li>Advisory on retrenchment and/or termination</li>
              <li>Conduct HR Compliances</li>
              <li>Getting conducted ‘Domestic Enquiries’</li>
              <li>Employment Litigation including advice on strategy to amicably resolve the Industrial Dispute</li>
              <li>Non-Disclosure Agreements</li>
              <li>Confidentiality Agreements</li>
              <li>Non-compete Agreements</li>
              <li>Downsizing</li>
              <li>Closure of Industrial Units</li>
            </AnimatingList>

            <AnimatingList head="Real Estate" desc="-The services include advising">
              <li>Regulatory laws including those relating to licenses and approvals</li>
              <li>Structuring of transaction</li>
              <li>Stamp Duty</li>
              <li>Change of land use</li>
              <li>Regulations governing acquisitions and sale of property</li>
              <li>Construction Contracts, Joint Development Agreements Project Management Consultancy Agreement etc.</li>
              <li>Grant/Assignment offline licensing of commercial and residential properties</li>
              <li>Due diligence and preparation of Title Search Reports</li>
              <li>Representation before Tribunals and Courts including arbitrations regarding real estate disputes</li>
            </AnimatingList>


          </div>
        </div>
    );
  }
}

export default About;
