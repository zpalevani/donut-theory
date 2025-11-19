import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // FIX: Added "const donuts = [" and "];"
  const donuts = [
    { 
      id: 1, 
      name: "The Gold Leaf", 
      price: "$12", 
      // Verified: Glazed donuts cooling on a rack
      img: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?q=80&w=800&auto=format&fit=crop" 
    },
    {
      id: 2,
      name: "Raspberry Rose",
      price: "$9",
      // Verified: Pink frosted donut
      img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1200&auto=format&fit=crop", 
    },
    {
      id: 3,
      name: "Dark Noir",
      price: "$10",
      // Verified: Stack of chocolate donuts (Fixed broken link)
      img: "https://images.pexels.com/photos/3779937/pexels-photo-3779937.jpeg?auto=compress&cs=tinysrgb&w=800", 
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?q=80&w=2000&auto=format&fit=crop"
          alt="Donut Background"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tighter mb-6">
            Redefining <span className="italic text-amber-200">Indulgence</span>
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-lg mb-10 text-stone-200">
            Artisan donuts crafted for the refined palate. Located in the heart
            of Donut Land.
          </p>
          <Link
            href="/contact"
            className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition duration-300"
          >
            Taste the Theory
          </Link>
        </div>
      </section>

      {/* Collection Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase">
            Curated Selection
          </span>
          <h2 className="font-serif text-4xl mt-4 text-stone-900">
            The Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {donuts.map((donut) => (
            <div key={donut.id} className="group cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden bg-stone-200">
                <Image
                  src={donut.img}
                  alt={donut.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-6 flex justify-between items-end border-b border-stone-300 pb-4">
                <div>
                  <h3 className="font-serif text-2xl text-stone-800">
                    {donut.name}
                  </h3>
                  <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">
                    Signature Series
                  </p>
                </div>
                <span className="font-serif text-xl text-amber-900">
                  {donut.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-stone-900 text-stone-100 py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl leading-relaxed italic">
            &quot;We don&apos;t just bake donuts. We engineer moments of pure
            culinary bliss.&quot;
          </h3>
        </div>
      </section>
    </main>
  );
}