import Image from "next/image";

export default function About() {
  return (
    <main className="pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Our Story
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-900">
            The Theory
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000&auto=format&fit=crop"
              alt="Baker working"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-3xl text-stone-800">
              Precision &amp; Passion
            </h2>
            <p className="text-stone-600 leading-loose font-light text-lg">
              Founded in the rolling hills of Donut Land, Donut Theory by Zara began with
              a simple question: What happens when you treat a donut not as a
              snack, but as a canvas for fine art?
            </p>
            <p className="text-stone-600 leading-loose font-light text-lg">
              We source our vanilla from Madagascar, our chocolate from Belgium,
              and our flour from local heritage grains. Every glaze is
              hand-mixed, and every garnish is placed with tweezers. This isn&apos;t
              fast food; it&apos;s slow food, perfected.
            </p>
            <div className="pt-4">
              <div className="h-px w-24 bg-amber-900 mb-4"></div>
              <p className="font-serif italic text-xl text-stone-800">
                - The Head Baker
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

