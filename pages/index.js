import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page">
      <header className="page-section">
        <h1 className="landing-title">Welcome to Next.js!</h1>
        <p className="text-center">
          A generic paragraph explaining what this site is supposed to be and
          why you care about that. More information below.
        </p>
        <Link href="/products">
          <a>Call to action</a>
        </Link>
      </header>

      {/* Pretend there's a bunch more styles here. */}
      <style jsx>{`
        .text-center {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
