import React from "react";
import "./Documents.css";
import { FaFilePdf, FaFileAlt } from "react-icons/fa";

const documents = [
  {
    title: "Memorandum of Association (MOA)",
    file: "/MOA.pdf",
    type: "pdf",
  },
  {
    title: "Bylaws & Governance Policy",
    file: "/IncorporationCertificate.pdf",
    type: "pdf",
  },
  {
    title: "SPC Care Foundation Registration Certificate",
    file: "/registration.pdf",
    type: "pdf",
  },
  {
    title: "Annual Health Impact Report",
    file: "/impact2024.pdf",
    type: "pdf",
  },
];

const Documents = () => {
  return (
    <section className="docs-wrapper" id="documents">
      <div className="docs-header">
        <h3 className="docs-badge">Documents</h3>
        <h1 className="docs-title">Official Records & Public Disclosures</h1>
        <p className="docs-sub">
          Access transparent, legally compliant and publicly available documentation of SPC Care Foundation.
        </p>
      </div>

      <div className="docs-grid">
        {documents.map((doc, index) => (
          <div className="doc-card" key={index}>
            <div className="doc-card-inner">
              {/* FRONT SIDE */}
              <div className="doc-front">
                <div className="doc-icon-wrap">
                  {doc.type === "pdf" ? (
                    <FaFilePdf className="doc-icon pdf" />
                  ) : (
                    <FaFileAlt className="doc-icon" />
                  )}
                </div>
                <h3 className="doc-name">{doc.title}</h3>
              </div>

              {/* BACK SIDE */}
              <div className="doc-back">
                <h3>{doc.title}</h3>
                <span
                  className="doc-btn"
                    onClick={() => window.open(process.env.PUBLIC_URL + doc.file, "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  View Document
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documents;
