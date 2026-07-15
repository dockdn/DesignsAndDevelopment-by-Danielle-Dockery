import Link from "next/link";

export function BackToHomeLink() {
  return (
    <div className="page-back-link-shell">
      <div className="container">
        <Link className="page-back-link" href="/">
          <span aria-hidden="true">←</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
