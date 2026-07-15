import Link from "next/link";

const features = [
  "Voice-to-text input",
  "Digital signatures",
  "PDF export and sharing",
  "Secure iCloud syncing",
];

const screens = [
  {
    title: "Contracts dashboard screen",
    placeholder: "contracts-dashboard.png",
    note: "Add the real Contracts dashboard screenshot here.",
    rotation: "showcase-phone-primary",
  },
  {
    title: "Edit contract or completed agreement screen",
    placeholder: "edit-contract.png or completed-agreement.png",
    note: "Add the real Edit Contract or completed agreement screenshot here.",
    rotation: "showcase-phone-secondary",
  },
];

export function VoicePDFMemoShowcase() {
  return (
    <section className="section voicepdfmemo-showcase" aria-labelledby="voicepdfmemo-showcase-title">
      <div className="container">
        <div className="voicepdfmemo-shell reveal">
          <div className="voicepdfmemo-copy">
            <span className="eyebrow">Custom iOS App</span>
            <h2 id="voicepdfmemo-showcase-title">
              <span>Simplify contracts.</span>
              <span className="voicepdfmemo-emphasis">Save time.</span>
              <span>Stay organized.</span>
            </h2>
            <p>
              VoicePDFMemo is a custom iOS application designed and developed to help
              field professionals complete, edit, save, and manage contract
              documentation more efficiently. It was created as a private business
              application for Panther.
            </p>

            <ul className="voicepdfmemo-features" aria-label="VoicePDFMemo features">
              {features.map((feature) => (
                <li key={feature}>
                  <span className="voicepdfmemo-icon" aria-hidden="true">
                    <span />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="voicepdfmemo-notice">
              <strong>Private business application</strong>
              <p>
                Developed for authorized users and distributed privately through Apple.
              </p>
            </div>

            <div className="voicepdfmemo-actions">
              <Link className="button" href="/case-studies/voicepdfmemo">
                View App Project
              </Link>
            </div>
          </div>

          <div className="voicepdfmemo-visual">
            <div className="voicepdfmemo-panel" aria-hidden="true">
              <span className="voicepdfmemo-panel-wash" />
              <span className="voicepdfmemo-panel-dots" />
            </div>

            <div className="voicepdfmemo-badge voicepdfmemo-badge-top">
              Built for real field workflows
            </div>

            <div className="voicepdfmemo-phones">
              {screens.map((screen) => (
                <div className={`showcase-phone ${screen.rotation}`} key={screen.title}>
                  <div className="showcase-phone-frame">
                    <div className="showcase-phone-top" aria-hidden="true">
                      <span>10:41</span>
                      <span className="showcase-phone-notch" />
                    </div>
                    <div
                      className="showcase-phone-screen showcase-phone-placeholder"
                      role="img"
                      aria-label={`${screen.title} placeholder. ${screen.note}`}
                    >
                      <div className="showcase-phone-placeholder-inner">
                        <strong>{screen.title}</strong>
                        <span>/public/projects/voicepdfmemo/{screen.placeholder}</span>
                        <p>{screen.note}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="voicepdfmemo-badge voicepdfmemo-badge-bottom">
              <strong>Designed and developed by Danielle Dockery</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
