import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <p className="text-white/70 mb-8">
          This project doesn't exist or has been removed.
        </p>
        <Link
          href="/work"
          className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

