import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-stone-900 mb-4">Product Not Found</h1>
        <p className="text-stone-600 mb-8">This donut doesn&apos;t exist in our collection.</p>
        <Link
          href="/"
          className="inline-block bg-stone-900 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-amber-900 transition"
        >
          Back to Collection
        </Link>
      </div>
    </div>
  );
}

