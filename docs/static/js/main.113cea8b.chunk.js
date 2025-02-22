(window.webpackJsonp = window.webpackJsonp || []).push([[0], [, , , , , , , , , , , , , , , , , function(e, t, a) {
  "use strict";
  t.a = { LANDING: "LANDING", CONTACT: "CONTACT", ABOUT: "ABOUT", TEAM: "TEAM", NEW: "NEW" }
}, , , , , , , , function(e, t, a) {
  "use strict";
  var n = a(3), l = a(4), i = a(6), r = a(5), c = a(7), o = a(0), s = a.n(o), u = (a(110), a(23)), m = a(9), d = a(161), A = a(164), E = (a(112), a(79)), p = a.n(E), f = a(38), g = a(26), h = function(e) {
    function t() {
      return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
    }
    
    return Object(c.a)(t, e), Object(l.a)(t, [{
      key: "render", value: function() {
        var e = this.props, t = e.items;
        e.location.path;
        return s.a.createElement("div", { className: "navigation" }, s.a.createElement(d.a, { bg: "light", expand: "lg" }, s.a.createElement(d.a.Brand, { href: "#home" }, s.a.createElement("div", { className: "d-flex align-items-center" }, s.a.createElement("img", {
          src: p.a,
          width: "30",
          height: "30",
          className: "logo d-inline-block align-top",
          alt: "React Bootstrap logo"
        }), s.a.createElement("div", null, s.a.createElement("div", { className: "text-brand", style: {
          fontSize: '28px'
          } }, f.b), s.a.createElement("div", { className: "text-medium text-secondary" }, s.a.createElement("i", {style: {fontSize: '18px'}}, "Advocates and Solicitors"))))), s.a.createElement(d.a.Toggle, { "aria-controls": "basic-navbar-nav" }), s.a.createElement(d.a.Collapse, { id: "basic-navbar-nav" }, s.a.createElement(A.a, { className: "ml-auto" }, t.map(function(e, t) {
          return s.a.createElement(A.a.Link, { key: t }, s.a.createElement(u.c, { to: Object(g.a)(e.route), activeClassName: "active", key: t, exact: !0 }, s.a.createElement("span", null, e.text)))
        })))))
      }
    }]), t
  }(o.Component), b = Object(m.f)(h), v = (a(118), function(e) {
    function t() {
      return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
    }
    
    return Object(c.a)(t, e), Object(l.a)(t, [{
      key: "render", value: function() {
        return s.a.createElement("div", { className: "disclaimer" }, s.a.createElement("div", { className: "content" }, s.a.createElement("div", { className: "desc" }, s.a.createElement("h2", null, "Disclaimer"), 'As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise. The material on the website is general information & there has been no advertisement, solicitation, communication, invitation or inducement of any sort whatsoever from M S Nagar and Co, Advocates and Solicitors or any of its members to solicit any work through this website. The Firm responsible for any action taken relying upon the contents of the website. The information provided on the website does not constitute legal advice, nor does it create an attorney-client relationship. The firm is not liable for any consequence of any action taken by the user relying on material / information provided under this website. By clicking the "I Agree" button the visitor accepts that you are seeking information of your own accord and volition.', s.a.createElement("div", { className: "action flex-row" }, s.a.createElement("button", {
          className: "primary",
          onClick: this.props.onAgree
        }, "I Agree"), s.a.createElement("button", {
          className: "default", onClick: function() {
            window.history.go(-1)
          }
        }, "I Disagree")))))
      }
    }]), t
  }(o.Component)), I = Object(m.f)(v), y = function(e) {
    function t() {
      var e;
      return Object(n.a)(this, t), (e = Object(i.a)(this, Object(r.a)(t).call(this))).onAgree = function() {
        sessionStorage.setItem("disclaimerAgreed", "true"), e.setState({ showDisclaimer: !1 })
      }, e.state = { showDisclaimer: !sessionStorage.getItem("disclaimerAgreed") }, e
    }
    
    return Object(c.a)(t, e), Object(l.a)(t, [{
      key: "render", value: function() {
        var e = this.state.showDisclaimer;
        return s.a.createElement("div", { className: "mainContainer" }, -1 === window.location.href.indexOf("localhost") && e && s.a.createElement(I, { onAgree: this.onAgree }), s.a.createElement(b, { items: f.c }), s.a.createElement("div", { className: "flex-grow-1" }, this.props.children), s.a.createElement("footer", { className: "j-sb footer" }, s.a.createElement("div", null, "Copyright ", (new Date).getFullYear(), " M. S. Nagar & Co. / All Photographs \xa9 M. S. Nagar & Co."), s.a.createElement("div", { className: "socialIcons" }, s.a.createElement("i", { className: "fab fa-facebook-f" }), s.a.createElement("i", { className: "fab fa-twitter" }), s.a.createElement("i", { className: "fab fa-linkedin-in" }))))
      }
    }]), t
  }(o.Component);
  t.a = y
}, function(e, t, a) {
  "use strict";
  a.d(t, "a", function() {
    return u
  });
  var n = a(61), l = a(62), i = a(99), r = a(97), c = a(98), o = a(17), s = { landing: { path: "/", name: o.a.LANDING }, new: { path: "/new", name: o.a.NEW }, about: { path: "/about", name: o.a.ABOUT }, contact: { path: "/contact", name: o.a.CONTACT }, team: { path: "/team", name: o.a.TEAM } }, u = function(e) {
    return n.a(l.a("path"), i.a(r.a("name", e)), c.a)(s)
  }
}, , , , , , , , , , , , function(e, t, a) {
  "use strict";
  a.d(t, "a", function() {
    return l
  }), a.d(t, "c", function() {
    return i
  }), a.d(t, "b", function() {
    return r
  });
  var n = a(17), l = { app: {} }, i = [{ text: "Home", route: "LANDING" }, { text: "About us", route: "ABOUT" }, { text: "Our Team", route: n.a.TEAM }, { text: "Contact us", route: n.a.CONTACT }], r = "M. S. Nagar & Co."
}, , , , , , , , , , , , , , , , , , , function(e, t, a) {
  "use strict";
  var n = a(3), l = a(4), i = a(6), r = a(5), c = a(7), o = a(0), s = a.n(o), u = (a(130), a(66)), m = window.innerWidth > 768, d = function(e) {
    function t() {
      return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
    }
    
    return Object(c.a)(t, e), Object(l.a)(t, [{
      key: "render", value: function() {
        var e = 300, t = 300;
        m && (e = 600, t = 500);
        var a = this.props, n = a.showMap, l = a.noBg;
        return s.a.createElement("div", { className: Object(u.a)("flex-col a-c contact", { isLarge: m, "no-bg": l }) }, n && s.a.createElement("div", { className: "mapouter" }, s.a.createElement("div", { className: "gmap_canvas" }, s.a.createElement("iframe", {
          width: e,
          height: t,
          id: "gmap_canvas",
          src: "https://maps.google.com/maps?q=28.582852,77.252653&ie=UTF8&iwloc=&output=embed",
          frameBorder: "0",
          scrolling: "no",
          marginHeight: "0",
          marginWidth: "0"
        }))), s.a.createElement("div", { className: "address" }, s.a.createElement("div", null, s.a.createElement("b", null, "Delhi Office:"), " ", s.a.createElement("br", null), "C-5, jangpura B, Mathura Road, ", s.a.createElement("br", null), "New Delhi-110014 ", s.a.createElement("br", null), s.a.createElement("span", { className: "email" }, s.a.createElement("b", null, "Email:"), s.a.createElement("a", { href: "mailto:m.nagar@msnagarandco.com" }, "m.nagar@msnagarandco.com"))), s.a.createElement("div", null, s.a.createElement("b", null, "Gurugram Office:"), " ", s.a.createElement("br", null), "Chamber No. A-27, ", s.a.createElement("br", null), "Lawyers Chambers", s.a.createElement("br", null), "District Court, Gurugram ", s.a.createElement("br", null)), s.a.createElement("div", null, s.a.createElement("b", null, "Faridabad Office:"), " ", s.a.createElement("br", null), "Kothi No. J-68,", s.a.createElement("br", null), "DLF, Sector 10 ", s.a.createElement("br", null), "Faridabad-121006 ", s.a.createElement("br", null))))
      }
    }]), t
  }(o.Component);
  t.a = d
}, , , , , , , , , function(e, t, a) {
  "use strict";
  var n = a(61), l = a(160), i = a(62), r = a(71), c = a(152), o = a(158), s = n.a(l.a(i.a(0)), r.a(i.a(1)), c.a);
  t.a = function() {
    var e;
    return (e = []).concat.apply(e, arguments).reduce(function(e, t) {
      if ("string" === typeof t) e.push(t); else if ("object" === typeof t) return n.a(o.a(e), s)(t);
      return e
    }, []).join(" ")
  }
}, , , , , , , , , function(e, t, a) {
}, , , , function(e, t, a) {
  e.exports = a.p + "static/media/logo.4093e1e3.png"
}, , , , function(e, t) {
  e.exports = "data:image/png;base64,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"
}, function(e, t) {
  e.exports = "data:image/png;base64,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"
}, function(e, t) {
  e.exports = "data:image/jpeg;base64,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"
}, function(e, t, a) {
  e.exports = a.p + "static/media/LILLIPUT.690dc819.png"
}, function(e, t, a) {
  e.exports = a.p + "static/media/Linde_plc.2b04e0b2.jpg"
}, function(e, t, a) {
  e.exports = a.p + "static/media/orient-craft.e630073e.jpg"
}, function(e, t, a) {
  e.exports = a.p + "static/media/Singer-India.f1fee597.jpg"
}, function(e, t, a) {
  e.exports = a.p + "static/media/talbros.d7cff473.jpg"
}, function(e, t, a) {
  e.exports = a.p + "static/media/tata-steel-logo.82998fd8.jpg"
}, function(e, t) {
  e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAB7CAYAAACCR3IzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNENTNDOUY3QjkzMTFFOUExOTVDMzZDRDMzMUZGRjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNENTNDOUU3QjkzMTFFOUExOTVDMzZDRDMzMUZGRjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDM5RTRCQzc5NEQxMUU5QTg3MzlDRkQyNTJCNzcyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMDM5RTRCRDc5NEQxMUU5QTg3MzlDRkQyNTJCNzcyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PovQYUEAACN1SURBVHja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"
}, function(e, t, a) {
  e.exports = a.p + "static/media/whirlpool.a6417abe.jpg"
}, , function(e, t, a) {
  e.exports = a.p + "static/media/aboutus.9080487d.jpg"
}, , , , , function(e, t, a) {
  e.exports = a(150)
}, , , , , , , , function(e, t, a) {
}, , function(e, t, a) {
}, , function(e, t, a) {
}, , , , , , function(e, t, a) {
}, , function(e, t, a) {
}, , function(e, t, a) {
}, , function(e, t, a) {
}, , function(e, t, a) {
}, , , , function(e, t, a) {
}, , function(e, t, a) {
}, , , function(e, t, a) {
}, , function(e, t, a) {
}, , function(e, t, a) {
}, , , function(e, t, a) {
  e.exports = a.p + "static/media/team.881b8aee.jpg"
}, function(e, t, a) {
}, , , , function(e, t, a) {
}, , function(e, t) {
  e.exports = { files: ["../public/svg/*.svg"], fontName: "fontIcons", classPrefix: "wf-", baseSelector: ".fontIcons", types: ["eot", "woff", "woff2", "ttf"], fileName: "static/fonts/webfonts.[fontname].[hash].[ext]" }
}, function(e, t, a) {
  "use strict";
  a.r(t);
  var n = a(0), l = a.n(n), i = a(43), r = a.n(i), c = a(45), o = a.n(c), s = a(58), u = a(23), m = (a(108), a(3)), d = a(4), A = a(6), E = a(5), p = a(7), f = a(9), g = a(25), h = a(70), b = (a(120), n.Component, n.Component, a(151)), v = (a(139), a(95)), I = a.n(v), y = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "render", value: function() {
        return l.a.createElement("div", { className: "about" }, l.a.createElement("img", {
          src: I.a,
          className: "img"
        }), l.a.createElement("div", { className: "profile" }, l.a.createElement("div", null, l.a.createElement("p", null, "M. S. Nagar & Company Advocates and Solicitors, has offices spread across Delhi, Gurugram and Faridabad. The firm through its Partners and Associates ensures high quality pragmatic legal opinions keeping in mind the current trends and latest laws in the industry and market. We also ensure that the clients are kept well informed of industry developments on a regular basis. Our mission is to provide dedicated, efficient, commercially sound, result oriented and timely solutions to our Clients."), l.a.createElement("p", null, "We represent our Clients before various courts, quasi-judicial authorities, and tribunals including (i) Supreme Court of India; (ii) High Courts of various States; (iii) District Courts of States; (iv) Consumer Forums from District to National Level; (v) Debt Recovery Tribunals and Debt Recovery Appellate Tribunals; (vi) National Company Law Tribunals of various States; (vii) National Company Law Appellate Tribunal (ix) National Green Tribunal, (x) The Customs,\xa0Excise\xa0and Service Tax Appellate\xa0Tribunal\xa0(CESTAT) (xi) Labour Courts and Industrial Tribunals, etc."), l.a.createElement("p", null, "Our areas of practice include Corporate and Commercial laws, Corporate Restructuring, Corporate Insolvency and Bankruptcy Laws, Industrial and Employment Laws, Economic Offences, Dispute Resolution, Arbitration and Conciliation, Intellectual Property Laws, Environment Laws, Information Technology Laws, Competition Laws, Consumer Protection Laws, Industrial and Labour Laws, Negotiable Instrument Laws, etc.")), l.a.createElement("h4", null, "Practice areas:"), l.a.createElement("ul", null,
          l.a.createElement("li", null, l.a.createElement("u", null, "E-discovery and Legal Document Review"), "- MSNC is one of India’s leading Law Firms which caters to its clients E-discovery litigation requirements, which include identification, Collection, Processing, Hosting, Legal Review and Production of documents, in the most cost-effective way. With a team of over 20 dedicated Associates, we at MSNC streamline your data management and supercharge your legal operations. Our Services include:", l.a.createElement("ul", null,
            [
              "Protect and log privileged information with a combination of AI, advanced technologies, and experienced reviewers.",
              "Negotiate ESI and review protocols with opposing parties utilizing best practice examples.",
              "Ensure accuracy of the production set leveraging systematic and targeted quality control workflows.",
              "Scalable and Efficient Managed Document Review",
              "Sampling of documents reviewed are collected for calibration.",
              "Tracking Reports are reviewed and presented in the form of Daily Reports and Weekly Reports.",
              "Reviewed documents are Quality Checked as per the defined process.",
              "eDiscovery consulting services",
              "Identification, preservation and collections - We use state-of-the-art technologies to collect data at client sites from all electronic devices.",
              "Preservation planning, disclosures, legal-hold implementation, and negotiations on the scope.",
              "Data and review platform hosting",
              "Document review and production",
              "Process-driven document review management services, with the capability to staff projects with resources from multiple geographies.",
              "Processing, early data and case assessment"
            ].map(x => l.a.createElement("li", null, x))
          )),
          
          l.a.createElement("li", null, l.a.createElement("u", null, "Data Breach Review/ Post Incident Response (PIR)"), "– At MSNC we provide Cyber Breach Mitigation and Response Solutions which include data identification through breach notification that minimizes data protection related compliance risk within manageable costs. Our team is comprised of highly analytical and detail-oriented members who are focussed in searching for compromised data items and identifying specific owners for those items. Our Service include:", l.a.createElement("ul", null,
            [
              "Cutting-Edge Approach to Data Handling - Our Experts find the most scalable and flexible data handling service.",
              "Sensitive Information Identification – We identify the sensitive data sets and automate data breach assessment process.",
              "Rapid Breach Alert – create a notification list during data breach incidents."
            ].map(x => l.a.createElement("li", null, x))
          )),
          
          //
          
          
          
          l.a.createElement("li", null, l.a.createElement("u", null, "Labour and Employment Laws"), "- the firm has established itself as an eminent practitioner in Labour and Employment laws. The firm boasts of a specialized team of lawyers and compliance officers who advise and assist companies like Linde, TATA, Krishna Maruti, Daikin, Whirlpool, etc. regularly for the following:", l.a.createElement("ul", null, l.a.createElement("li", null, "Employment Strategy and Documentation"), l.a.createElement("li", null, "Identifying of applicable labour laws legislations applicable to clients\u2019 Industry to complying with the same"), l.a.createElement("li", null, "Employee Benefit & Compensation Structuring"), l.a.createElement("li", null, "Drafting and phrasing of third party agreements for providing contract labour"), l.a.createElement("li", null, "Advisory on retrenchment and/or termination"), l.a.createElement("li", null, "Conduct HR Compliances"), l.a.createElement("li", null, "Getting conducted \u2018Domestic Enquiries\u2019"), l.a.createElement("li", null, "Employment Litigation including advice on strategy to amicably resolve the Industrial Dispute"), l.a.createElement("li", null, "Non-Disclosure Agreements"), l.a.createElement("li", null, "Confidentiality Agreements"), l.a.createElement("li", null, "Non-compete Agreements"), l.a.createElement("li", null, "Downsizing"), l.a.createElement("li", null, "Closure of Industrial Units"))), l.a.createElement("li", null, l.a.createElement("u", null, "Criminal Litigation"), "- the firm has extensive experience in representing clients in criminal matters including the following:", l.a.createElement("ul", null, l.a.createElement("li", null, "White Collar Crimes/Economic Offences"), l.a.createElement("li", null, "Department of Company Affairs-Serious Frauds Investigation office"), l.a.createElement("li", null, "Bank/Financial Institutions Frauds"), l.a.createElement("li", null, "Dishonor of Cheques"), l.a.createElement("li", null, "Quashing of FIRs, Bails, Trial"), l.a.createElement("li", null, "Criminal Complaints"), l.a.createElement("li", null, "Criminal Writs/Revisions/Appeals"), l.a.createElement("li", null, "Defamation Cases"), l.a.createElement("li", null, "Prevention of Money Laundering Act"), l.a.createElement("li", null, "Prevention of Corruption Act"), l.a.createElement("li", null, "Violation of Intellectual Property Rights/Cyber Laws"), l.a.createElement("li", null, "Narcotics and Drugs Violation"))), l.a.createElement("li", null, l.a.createElement("u", null, "Dispute Resolution and Arbitration"), "- Areas of practice includes", l.a.createElement("ul", null, l.a.createElement("li", null, "Corporate Insolvency disputes"), l.a.createElement("li", null, "Domestic arbitration"), l.a.createElement("li", null, "Environment related matters"), l.a.createElement("li", null, "Finance and Securities Litigation"), l.a.createElement("li", null, "Insurance Disputes"), l.a.createElement("li", null, "Labour litigation"), l.a.createElement("li", null, "Real Estate Litigation"), l.a.createElement("li", null, "Recovery proceedings"), l.a.createElement("li", null, "Shareholders Dispute including Oppression and Mismanagement"), l.a.createElement("li", null, "Taxation related litigation"))), l.a.createElement("li", null, l.a.createElement("u", null, "Intellectual Property Rights"), "- the team advises and assists clients on:", l.a.createElement("ul", null, l.a.createElement("li", null, "Protection and prosecution of IP rights (including Patents, Trademarks, Design Rights, Copyrights, Geographical Indications, Domain Names, proprietary know how and business processes)"), l.a.createElement("li", null, "Registration and opposition of trademarks"), l.a.createElement("li", null, "IP due diligence and audits"), l.a.createElement("li", null, "IP acquisition, transfer and related agreements"), l.a.createElement("li", null, "Drafting and negotiating various IP agreements including license agreements"), l.a.createElement("li", null, "assignment deeds, IP development agreements, etc"), l.a.createElement("li", null, "Representing before various authorities, courts and forums on issues relating to"), l.a.createElement("li", null, "registration and protection of IP rights"), l.a.createElement("li", null, "Domain name registrations and maintenance"))), l.a.createElement("li", null, l.a.createElement("u", null, "Anti-Trust and Competition"), "- The team advises on range of competition issues including:", l.a.createElement("ul", null, l.a.createElement("li", null, "Cartels and anti-trust investigation"), l.a.createElement("li", null, "Abuse of dominant position"), l.a.createElement("li", null, "Commercial agreements"), l.a.createElement("li", null, "Competition law compliance strategies"))), l.a.createElement("li", null, l.a.createElement("u", null, "Corporate Practice"), "- The firm has a dedicated team of lawyers and other professionals to provide services to any corporate entity right from the inception to dissolution.", l.a.createElement("ul", null, l.a.createElement("li", null, "Mergers and Acquisition"), l.a.createElement("li", null, "Takeovers"), l.a.createElement("li", null, "Winding up"), l.a.createElement("li", null, "Corporate Restructuring"), l.a.createElement("li", null, "Industry specific licenses"), l.a.createElement("li", null, "Regulatory Compliances"))), l.a.createElement("li", null, l.a.createElement("u", null, "Insolvency and bankruptcy Practice"), "- Our expertise covers legal and commercial advice on matters including:", l.a.createElement("ul", null, l.a.createElement("li", null, "Negotiations with creditors for settlements and restructuring"), l.a.createElement("li", null, "Liquidations/Winding up"), l.a.createElement("li", null, "Out-of-court restructurings and refinancing"), l.a.createElement("li", null, "Financial Restructuring of Debts Reorganization through Strategic Debt Restructuring"), l.a.createElement("li", null, "Insolvency filing requirements"), l.a.createElement("li", null, "Formal insurance /liquidation/ bankruptcy proceedings before the court (NCLT/ DRT /NCLAT/Supreme Court) through Insolvency and bankruptcy Code 2016"), l.a.createElement("li", null, "Debt Recovery Tribunal (DRT) including those under the Securitization and Reconstruction of Financial Assets and Enforcement of Security interest Act 2002 (SARFAESI)"), l.a.createElement("li", null, "Financial Due Diligence"))), l.a.createElement("li", null, l.a.createElement("u", null, "Real Estate"), "- The services include advising", l.a.createElement("ul", null, l.a.createElement("li", null, "Regulatory laws including those relating to licenses and approvals"), l.a.createElement("li", null, "Structuring of transaction"), l.a.createElement("li", null, "Stamp Duty"), l.a.createElement("li", null, "Change of land use"), l.a.createElement("li", null, "Regulations governing acquisitions and sale of property"), l.a.createElement("li", null, "Construction Contracts, Joint Development Agreements Project Management Consultancy Agreement etc."), l.a.createElement("li", null, "Grant/Assignment offline licensing of commercial and residential properties"), l.a.createElement("li", null, "Due diligence and preparation of Title Search Reports"), l.a.createElement("li", null, "Representation before Tribunals and Courts including arbitrations regarding real estate disputes")))
        )))
      }
    }]), t
  }(n.Component), O = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "componentDidMount", value: function() {
        window.scrollTo(0, 0)
      }
    }, {
      key: "render", value: function() {
        return l.a.createElement(g.a, null, l.a.createElement(y, null))
      }
    }]), t
  }(n.Component), C = a(57), N = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "componentDidMount", value: function() {
        window.scrollTo(0, 0)
      }
    }, {
      key: "render", value: function() {
        return l.a.createElement(g.a, null, l.a.createElement(C.a, { showMap: !0, noBg: !0 }))
      }
    }]), t
  }(n.Component), j = a(155), x = (a(75), a(142), a(163)), D = a(154), T = a(134), k = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "componentDidMount", value: function() {
        window.AOS.init()
      }
    }, {
      key: "render", value: function() {
        var e = this.props, t = e.member, a = e.index, n = t.features || [];
        return l.a.createElement(x.a, {
          className: "team-member",
          style: { border: "none", marginBottom: "30px" },
          "data-aos": "slide-up",
          "data-aos-duration": "800",
          "data-aos-delay": 100 * a
        }, l.a.createElement(x.a.Body, { className: "list-title" }, l.a.createElement(x.a.Title, null, t.name), t.desc && l.a.createElement(x.a.Text, null, t.desc)), l.a.createElement("div", { className: "list-group-details" }, l.a.createElement(x.a.Body, { className: "list-title" }, l.a.createElement(x.a.Title, null, l.a.createElement("b", null, t.name)), t.desc && l.a.createElement(x.a.Text, null, t.desc)), l.a.createElement(D.a, { className: "list-group-flush" }, n.map(function(e, t) {
          return l.a.createElement(T.a, { key: t }, e)
        }))))
      }
    }]), t
  }(n.Component), z = [{ name: "M S Nagar", desc: "Advocate, Founding Partner", features: ["Chairman- FCCI", "President - NCR Employers Association", "33+ years of experience"] }, { name: "Mohit Nagar", desc: "Advocate, Managing Partner", features: ["LL.M. (Cardiff University, U.K.)", "Specialization in Company and Commercial Laws- NCLT, NCLAT, CESTAT, High Courts and Supreme Court"] }, {
    name: "Deepanshu Nagar",
    desc: "Advocate, Partner (IPR)",
    features: ["B.Tech (Computer Science Engineering), VIT Vellore, LL.M. (QMUL, London)", "Specialisation in IPR Laws, Technology & Media Laws and Data Protection"]
  },
    { name: "Dimple Nagar", desc: "Advocate, Partner", features: ["B.A", "LL.B"] },
    { name: "Renu Agarwal", desc: "Advocate", features: ["Former Vice President, District Bar Association, Tis Hazari", "30+ years of experience"] }, { name: "Pushpender Yadav", features: ["Ex. Judicial Officer, Haryana"] }, { name: "Ajit Rajora", desc: "Advocate" }, { name: "S B Kaushik", desc: "Expert in GST", features: ["Excise with over 30 years of experience"] }], Z = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "render", value: function() {
        return l.a.createElement("div", { className: "team-page" }, l.a.createElement("div", { className: "team" }, l.a.createElement(j.a, { className: "row justify-content-center" }, z.map(function(e, t) {
          return l.a.createElement(k, { index: t, member: e, key: t })
        }))))
      }
    }]), t
  }(n.Component), w = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "componentDidMount", value: function() {
        window.scrollTo(0, 0)
      }
    }, {
      key: "render", value: function() {
        return l.a.createElement(g.a, null, l.a.createElement(Z, null))
      }
    }]), t
  }(n.Component), M = a(26), G = a(17), H = o()({
    loader: function() {
      return a.e(1).then(a.bind(null, 157))
    }, loading: function() {
      return l.a.createElement("div", { className: "hide" }, "loading page...")
    }
  }), S = (o()({
    loader: function() {
      return Promise.resolve().then(a.bind(null, 151))
    }, loading: function() {
      return l.a.createElement("div", { className: "hide" }, "loading page...")
    }
  }), [{ path: Object(M.a)(G.a.LANDING), component: b.default, exact: !0 }, { path: Object(M.a)(G.a.CONTACT), component: N, exact: !0 }, { path: Object(M.a)(G.a.ABOUT), component: O, exact: !0 }, { path: Object(M.a)(G.a.TEAM), component: w, exact: !0 }]), Q = function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "componentDidUpdate", value: function(e) {
        this.props.location, e.location
      }
    }, {
      key: "render", value: function() {
        var e = this;
        return l.a.createElement(l.a.Fragment, null, l.a.createElement(f.c, null, S.map(function(t, a) {
          return l.a.createElement(f.a, Object.assign({}, e.props, { path: t.path, component: t.component, key: a, exact: !0 }))
        }), l.a.createElement(f.a, { component: H })))
      }
    }]), t
  }(n.Component), B = Object(f.f)(Q), R = (a(143), a(145), a(147), function(e) {
    function t() {
      return Object(m.a)(this, t), Object(A.a)(this, Object(E.a)(t).apply(this, arguments))
    }
    
    return Object(p.a)(t, e), Object(d.a)(t, [{
      key: "componentDidMount", value: function() {
      }
    }, {
      key: "render", value: function() {
        return l.a.createElement(B, null)
      }
    }], [{
      key: "getData", value: function() {
        return Promise.resolve({})
      }
    }]), t
  }(n.Component)), L = Object(f.f)(Object(s.b)(function(e) {
    e.extranet;
    return {}
  }, {})(R)), F = a(37), U = a(156), X = a(165), V = a(96), J = a(38), Y = ("undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || F.d)(Object(F.a)(V.a))(F.e), P = Object(F.c)({
    app: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case"SET_MESSAGE":
          return t.message;
        default:
          return e
      }
    }
  });
  a(149);
  var W, q = (W = window.__REDUX_STATE__ || {}, (U.a(W) || X.a(W)) && (W = J.a), Y(P, W)), K = l.a.createElement(s.a, { store: q }, l.a.createElement(u.a, null, l.a.createElement(L, null)));
  window.onload = function() {
    o.a.preloadReady().then(function() {
      r.a.hydrate(K, document.getElementById("root"))
    })
  }
}, function(e, t, a) {
  "use strict";
  a.r(t);
  var n = a(3), l = a(4), i = a(6), r = a(5), c = a(7), o = a(0), s = a.n(o), u = a(25), m = (a(122), a(17)), d = a(26), A = (a(124), a(66), [{ name: "Advocates and associates", count: "20+" }, { name: "Awards and accolades", count: "10+" }, { name: "Corporate Clients", count: "300+" }, { name: "Cases", count: "35,000+" }]), E = function(e) {
      function t() {
        return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
      }
      
      return Object(c.a)(t, e), Object(l.a)(t, [{
        key: "componentDidMount", value: function() {
          window.AOS.init()
        }
      }, {
        key: "render", value: function() {
          return s.a.createElement("div", { className: "achievements" }, A.map(function(e, t) {
            return s.a.createElement("div", { className: "item-card", key: t, "data-aos": "slide-up", "data-aos-duration": "1500", "data-aos-delay": 150 * t }, s.a.createElement("span", { className: "count" }, e.count), s.a.createElement("span", { className: "name" }, e.name))
          }))
        }
      }]), t
    }(o.Component), p = a(159), f = (a(126), a(83)), g = a.n(f), h = a(84), b = a.n(h), v = a(85), I = a.n(v), y = a(86), O = a.n(y), C = a(87), N = a.n(C), j = a(88), x = a.n(j), D = a(89), T = a.n(D), k = a(90), z = a.n(k), Z = a(91), w = a.n(Z), M = a(92), G = a.n(M), H = a(93), S = a.n(H),
    Q = [{ url: g.a, name: "Daikin" }, { url: b.a, name: "Gates" }, { url: I.a, name: "Krishna Maruti" }, { url: O.a, name: "Lilliput" }, { url: N.a, name: "Linde" }, { url: x.a, name: "Orient Craft Limited" }, { url: T.a, name: "Singer India" }, { url: z.a, name: "Talbros" }, { url: w.a, name: "Tata Steel" }, { url: G.a, name: "Usha" }, { url: S.a, name: "Whirlpool" }], B = function(e) {
      function t() {
        return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
      }
      
      return Object(c.a)(t, e), Object(l.a)(t, [{
        key: "render", value: function() {
          return s.a.createElement("div", { className: "clients" }, s.a.createElement(p.a, null, Q.map(function(e, t) {
            return s.a.createElement(p.a.Item, { interval: 2500, key: t }, s.a.createElement("img", { className: "d-block w-auto img mx-auto", src: e.url, alt: "First slide" }))
          })))
        }
      }]), t
    }(o.Component), R = a(57), L = a(162), F = a(163), U = a(154), X = (a(132), function(e) {
      function t() {
        return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
      }
      
      return Object(c.a)(t, e), Object(l.a)(t, [{
        key: "render", value: function() {
          // accordion
          return s.a.createElement(L.a, null,
            
            //marker
            
            s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
              as: F.a.Header,
              eventKey: "010"
            }, "E-discovery and Legal Document Review"), s.a.createElement(L.a.Collapse, { eventKey: "010" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "MSNC is one of India’s leading Law Firms which caters to its clients E-discovery litigation requirements, which include identification, Collection, Processing, Hosting, Legal Review and Production of documents, in the most cost-effective way. With a team of over 20 dedicated Associates, we at MSNC streamline your data management and supercharge your legal operations. Our Services include:"), s.a.createElement(U.a, { variant: "flush" },
              
              [
                "Protect and log privileged information with a combination of AI, advanced technologies, and experienced reviewers.",
                "Negotiate ESI and review protocols with opposing parties utilizing best practice examples.",
                "Ensure accuracy of the production set leveraging systematic and targeted quality control workflows.",
                "Scalable and Efficient Managed Document Review",
                "Sampling of documents reviewed are collected for calibration.",
                "Tracking Reports are reviewed and presented in the form of Daily Reports and Weekly Reports.",
                "Reviewed documents are Quality Checked as per the defined process.",
                "eDiscovery consulting services",
                "Identification, preservation and collections - We use state-of-the-art technologies to collect data at client sites from all electronic devices.",
                "Preservation planning, disclosures, legal-hold implementation, and negotiations on the scope.",
                "Data and review platform hosting",
                "Document review and production",
                "Process-driven document review management services, with the capability to staff projects with resources from multiple geographies.",
                "Processing, early data and case assessment"
              ].map(x => s.a.createElement(U.a.Item, null, x)),
            
            
            
            )))),
            
            // next one
            
            s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
              as: F.a.Header,
              eventKey: "020"
            }, "Data Breach Review/ Post Incident Response (PIR)"), s.a.createElement(L.a.Collapse, { eventKey: "020" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "At MSNC we provide Cyber Breach Mitigation and Response Solutions which include data identification through breach notification that minimizes data protection related compliance risk within manageable costs. Our team is comprised of highly analytical and detail-oriented members who are focussed in searching for compromised data items and identifying specific owners for those items. Our Service include:"), s.a.createElement(U.a, { variant: "flush" },
              
              [
                "Cutting-Edge Approach to Data Handling - Our Experts find the most scalable and flexible data handling service.",
                "Sensitive Information Identification – We identify the sensitive data sets and automate data breach assessment process.",
                "Rapid Breach Alert – create a notification list during data breach incidents."
              ].map(x => s.a.createElement(U.a.Item, null, x)),
            
            
            )))),
            //marker end
            s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "0"
          }, "Labour and Employment Laws"), s.a.createElement(L.a.Collapse, { eventKey: "0" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The firm has established itself as an eminent practitioner in Labour and Employment laws. The firm boasts of a specialized team of lawyers and compliance officers who advise and assist companies like Linde, TATA, Krishna Maruti, Daikin, Whirlpool, etc. regularly for the following:"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Employment Strategy and Documentation"), s.a.createElement(U.a.Item, null, "Identifying of applicable labour laws legislations applicable to clients\u2019 Industry to complying with the same"), s.a.createElement(U.a.Item, null, "Employee Benefit & Compensation Structuring"), s.a.createElement(U.a.Item, null, "Drafting and phrasing of third-party agreements for providing contract labour"), s.a.createElement(U.a.Item, null, "Advisory on retrenchment and/or termination"), s.a.createElement(U.a.Item, null, "Conduct HR Compliances"), s.a.createElement(U.a.Item, null, "Conducting Domestic Enquiries"), s.a.createElement(U.a.Item, null, "Employment Litigation including advice on strategy to amicably resolve the Industrial Dispute"), s.a.createElement(U.a.Item, null, "Non-Disclosure Agreements"), s.a.createElement(U.a.Item, null, "Confidentiality Agreements"), s.a.createElement(U.a.Item, null, "Non-compete Agreements"), s.a.createElement(U.a.Item, null, "Downsizing"), s.a.createElement(U.a.Item, null, "Closure of Industrial Units"))))),
            //new
            
            
            // end
            s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "1"
          }, "Criminal Litigation"), s.a.createElement(L.a.Collapse, { eventKey: "1" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "Areas of practice includes"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Corporate Insolvency disputes"), s.a.createElement(U.a.Item, null, "Domestic arbitration"), s.a.createElement(U.a.Item, null, "Environment related matters"), s.a.createElement(U.a.Item, null, "Finance and Securities Litigation"), s.a.createElement(U.a.Item, null, "Insurance Disputes"), s.a.createElement(U.a.Item, null, "Labour litigation"), s.a.createElement(U.a.Item, null, "Real Estate Litigation"), s.a.createElement(U.a.Item, null, "Recovery proceedings"), s.a.createElement(U.a.Item, null, "Shareholders Dispute including Oppression and Mismanagement"), s.a.createElement(U.a.Item, null, "Drafting arbitration agreements"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "2"
          }, "Dispute Resolution and Arbitration"), s.a.createElement(L.a.Collapse, { eventKey: "2" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The firm has extensive experience in representing clients in criminal matters including the following:"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "White Collar Crimes/Economic Offences"), s.a.createElement(U.a.Item, null, "Department of Company Affairs-Serious Frauds Investigation office"), s.a.createElement(U.a.Item, null, "Bank/Financial Institutions Frauds"), s.a.createElement(U.a.Item, null, "Dishonor of Cheques"), s.a.createElement(U.a.Item, null, "Quashing of FIRs, Bails, Trial"), s.a.createElement(U.a.Item, null, "Criminal Complaints"), s.a.createElement(U.a.Item, null, "Criminal Writs/Revisions/Appeals"), s.a.createElement(U.a.Item, null, "Defamation Cases"), s.a.createElement(U.a.Item, null, "Prevention of Money Laundering Act"), s.a.createElement(U.a.Item, null, "Prevention of Corruption Act"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "3"
          }, "Intellectual Property Rights"), s.a.createElement(L.a.Collapse, { eventKey: "3" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The team advises and assists clients on:"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Protection and prosecution of IP rights (including Patents, Trademarks, Design Rights, Copyrights, Geographical Indications, Domain Names, proprietary know how and business processes)"), s.a.createElement(U.a.Item, null, "Registration and opposition of trademarks"), s.a.createElement(U.a.Item, null, "Patent filings and prosecution"), s.a.createElement(U.a.Item, null, "IP due diligence and audits"), s.a.createElement(U.a.Item, null, "IP acquisition, transfer and related agreements"), s.a.createElement(U.a.Item, null, "Drafting and negotiating various IP agreements including license agreements"), s.a.createElement(U.a.Item, null, "Litigation and enforcement"), s.a.createElement(U.a.Item, null, "Domain name registrations and maintenance"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "4"
          }, "Anti-Trust and Competition"), s.a.createElement(L.a.Collapse, { eventKey: "4" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The Corporate team advises on range of competition issues including:"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Cartels and anti-trust investigation"), s.a.createElement(U.a.Item, null, "Abuse of dominant position"), s.a.createElement(U.a.Item, null, "Commercial agreements"), s.a.createElement(U.a.Item, null, "Competition law compliance strategies"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "5"
          }, "Corporate Practice"), s.a.createElement(L.a.Collapse, { eventKey: "5" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The firm has a dedicated team of lawyers and other professionals to provide services to any corporate entity right from the inception to dissolution."), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Mergers and Acquisition"), s.a.createElement(U.a.Item, null, "Takeovers"), s.a.createElement(U.a.Item, null, "Winding p"), s.a.createElement(U.a.Item, null, "CorporateRestructuring"), s.a.createElement(U.a.Item, null, "Industry specific liceses"), s.a.createElement(U.a.Item, null, "Regulatory Compliances"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "6"
          }, "Insolvency and bankruptcy Practice"), s.a.createElement(L.a.Collapse, { eventKey: "6" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "Our expertise covers legal and commercial advice on matters including:"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Negotiations with creditors for settlements and restructuring"), s.a.createElement(U.a.Item, null, "Liquidations/Winding up"), s.a.createElement(U.a.Item, null, "Out-of-court restructurings and refinancing"), s.a.createElement(U.a.Item, null, "Financial Restructuring of Debts Reorganization through Strategic Debt Restructuring"), s.a.createElement(U.a.Item, null, "Insolvency filing requirements"), s.a.createElement(U.a.Item, null, "Formal insurance /liquidation/ bankruptcy proceedings before the court (NCLT/ DRT /NCLAT/Supreme Court) through Insolvency and bankruptcy Code 2016"), s.a.createElement(U.a.Item, null, "Debt Recovery Tribunal (DRT) including those under the Securitization and Reconstruction of Financial Assets and Enforcement of Security interest Act 2002 (SARFAESI)"), s.a.createElement(U.a.Item, null, "Financial Due Diligence"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "7"
          }, "Real Estate"), s.a.createElement(L.a.Collapse, { eventKey: "7" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The services include"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Mergers and Acquisition"), s.a.createElement(U.a.Item, null, "Takeovers"), s.a.createElement(U.a.Item, null, "Winding p"), s.a.createElement(U.a.Item, null, "CorporateRestructuring"), s.a.createElement(U.a.Item, null, "Industry specific liceses"), s.a.createElement(U.a.Item, null, "Regulatory Compliances"))))), s.a.createElement(F.a, null, s.a.createElement(L.a.Toggle, {
            as: F.a.Header,
            eventKey: "8"
          }, "Corporate Practice"), s.a.createElement(L.a.Collapse, { eventKey: "8" }, s.a.createElement(F.a.Body, null, s.a.createElement("div", { className: "subText" }, "The services include"), s.a.createElement(U.a, { variant: "flush" }, s.a.createElement(U.a.Item, null, "Regulatory laws including those relating to licenses and approvals"), s.a.createElement(U.a.Item, null, "Structuring of transaction"), s.a.createElement(U.a.Item, null, "Stamp Duty"), s.a.createElement(U.a.Item, null, "Change of land use"), s.a.createElement(U.a.Item, null, "Regulations governing acquisitions and sale of property"), s.a.createElement(U.a.Item, null, "Construction Contracts, Joint Development Agreements Project Management Consultancy Agreement etc."), s.a.createElement(U.a.Item, null, "Grant/Assignment offline licensing of commercial and residential properties"), s.a.createElement(U.a.Item, null, "Due diligence and preparation of Title Search Reports"))))))
        }
      }]), t
    }(o.Component)), V = (a(135), function(e) {
      function t() {
        return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
      }
      
      return Object(c.a)(t, e), Object(l.a)(t, [{
        key: "render", value: function() {
          return s.a.createElement("div", { className: "section-heading" }, s.a.createElement("span", { className: "heading" }, this.props.text))
        }
      }]), t
    }(o.Component)), J = a(23), Y = function(e) {
      function t() {
        return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
      }
      
      return Object(c.a)(t, e), Object(l.a)(t, [{
        key: "render", value: function() {
          return s.a.createElement("div", { className: "homePage" }, s.a.createElement("div", { className: "description-wrapper" }, s.a.createElement("div", { className: "description sideGutter text-large" }, "M. S. Nagar & Co. is a full-service law firm, providing legal services to its clients for over three decades now. We at M. S. Nagar & Co. aim to provide single-window Legal services. The firm brings together highly specialized professionals to effectively cater to the legal requirements of more than 300 companies and corporate houses (including Multinationals) as its clientele. Our moto is to provide a synergetic environment to its client by understanding the clients\u2019 perspective and needs...\xa0", s.a.createElement(J.c, {
            to: Object(d.a)(m.a.ABOUT),
            exact: !0
          }, s.a.createElement("span", { className: "text-brand" }, "read more")))), s.a.createElement("div", null, s.a.createElement(E, null)), s.a.createElement("div", null, s.a.createElement("div", { className: "heading sideGutter" }, s.a.createElement(V, { text: "Our Expertise" })), s.a.createElement("div", { className: "sideGutter" }, s.a.createElement(X, null))), s.a.createElement("div", { className: "clients-section" }, s.a.createElement("div", { className: "heading sideGutter" }, s.a.createElement(V, { text: "Our Clients" })), s.a.createElement("div", { className: "sideGutter" }, s.a.createElement(B, null))), s.a.createElement("div", null, s.a.createElement("div", { id: "contact" }, s.a.createElement(R.a, null))))
        }
      }]), t
    }(o.Component), P = (a(137), function(e) {
      function t() {
        return Object(n.a)(this, t), Object(i.a)(this, Object(r.a)(t).apply(this, arguments))
      }
      
      return Object(c.a)(t, e), Object(l.a)(t, [{
        key: "componentDidMount", value: function() {
          window.scrollTo(0, 0)
        }
      }, {
        key: "render", value: function() {
          return s.a.createElement(u.a, null, s.a.createElement(Y, null))
        }
      }]), t
    }(o.Component));
  t.default = P
}], [[100, 3, 2]]]);
