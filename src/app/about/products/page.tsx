import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Product data (in a real app, this would come from a database or API)
const donuts = [
  {
    id: 1,
    name: "The Gold Leaf",
    price: "$12",
    img: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?q=80&w=800&auto=format&fit=crop",
    description: "A luxurious donut adorned with edible gold leaf, featuring our signature vanilla glaze and a hint of saffron. Each bite is a celebration of opulence.",
    ingredients: ["Premium flour", "Madagascar vanilla", "Edible gold leaf", "Saffron essence"],
  },
  {
    id: 2,
    name: "Raspberry Rose",
    price: "$9",
    img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1200&auto=format&fit=crop",
    description: "Delicate raspberry glaze meets rosewater-infused cream. A floral symphony that dances on your palate with every bite.",
    ingredients: ["Fresh raspberries", "Rosewater", "Vanilla cream", "Organic sugar"],
  },
  {
    id: 3,
    name: "Dark Noir",
    price: "$10",
    img: "https://images.pexels.com/photos/3779937/pexels-photo-3779937.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Rich Belgian dark chocolate glaze over a perfectly baked donut. For the true chocolate connoisseur who appreciates depth and intensity.",
    ingredients: ["Belgian dark chocolate", "Cocoa powder", "Vanilla extract", "Sea salt"],
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const donut = donuts.find((d) => d.id === parseInt(params.id));

  if (!donut) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-stone-600 hover:text-amber-900 transition mb-8"
        >
          <span className="mr-2">←</span>
          <span className="text-sm uppercase tracking-widest">Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative h-[600px] w-full overflow-hidden bg-stone-200">
            <Image
              src={donut.img}
              alt={donut.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase">
                Signature Series
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mt-4">
                {donut.name}
              </h1>
              <p className="font-serif text-3xl text-amber-900 mt-6">{donut.price}</p>
            </div>

            <div className="pt-8 border-t border-stone-300">
              <h2 className="font-serif text-2xl text-stone-800 mb-4">Description</h2>
              <p className="text-stone-600 leading-relaxed text-lg font-light">
                {donut.description}
              </p>
            </div>

            <div className="pt-8 border-t border-stone-300">
              <h2 className="font-serif text-2xl text-stone-800 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {donut.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-stone-600 font-light">
                    • {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                className="bg-stone-900 text-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-amber-900 transition duration-300 w-full md:w-auto"
              >
                Visit Us to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}