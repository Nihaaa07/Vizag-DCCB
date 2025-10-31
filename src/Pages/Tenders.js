import React from "react";
import "./Tenders.css";

const Tenders = () => {
  return (
    <main className="tenders-page">
      {/* ---------- TENDERS CARD ---------- */}
      <section className="tenders-card">
        <header className="tenders-header">
          <h1>Tenders — Sealed Quotations Invited</h1>
          <p className="sub">
            Construction of compound wall — Proposed amount:{" "}
            <strong>Rs. 3,60,000/-</strong>
          </p>
        </header>

        <article className="tenders-body">
          <p>
            We would like to inform you that our bank is seeking sealed
            quotations from contractors for the construction of a compound wall
            at the address provided. The proposed amount for the project is{" "}
            <strong>Rs. 3,60,000/-</strong>. The panel engineer has prepared a
            detailed abstract estimation.
          </p>

          <div className="deadline">
            <strong>Deadline for receiving quotations:</strong> 17.07.2023 at{" "}
            <strong>11:00 AM</strong>
          </div>

          <h2>For Further Information Contact:</h2>
          <ul className="contacts">
            <li>
              Mail-id:{" "}
              <a href="mailto:sec_dev@vizagdccb.org.in">
                sec_dev@vizagdccb.org.in
              </a>
              ,{" "}
              <a href="mailto:managerdevvizagdccb@gmail.com">
                managerdevvizagdccb@gmail.com
              </a>
            </li>
            <li>
              Contact Number:{" "}
              <a href="tel:+917331108715">7331108715</a>
            </li>
            <li>
              Development Section:{" "}
              <a href="tel:+919963607778">9963607778</a>
            </li>
          </ul>

          <h2>Construction Site Address:</h2>
          <address className="address">
            T.S.No-67,<br />
            Block No-2, 12th Ward,<br />
            D/no:12/41 and 42,<br />
            Town Kotha Road,<br />
            G V M C,<br />
            Visakhapatnam Dist.
          </address>

          <h2>Quotation To Be Forwarded To Below Address:</h2>
          <address className="address">
            The District Cooperative Central Bank Ltd., Visakhapatnam<br />
            D.no:58-14-57/2,<br />
            YSR Sahakara Bhavan,<br />
            Marripalem Vuda Layout,<br />
            NH 5 Road,<br />
            Visakhapatnam-530009
          </address>

          <p className="estimate-link">
            <a
              className="btn"
              href="/pdfs/tenders.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to View DETAILED CUM ABSTRACT ESTIMATE
            </a>
          </p>
        </article>
      </section>

      {/* ---------- AUCTION NOTICES CARD ---------- */}
      <section className="tenders-card auction-card">
        <header className="tenders-header">
          <h1>AUCTION NOTICES</h1>
          <p className="sub">(Content to be added soon...)</p>
        </header>
      </section>
    </main>
  );
};

export default Tenders;
