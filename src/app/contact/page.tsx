export default function Contact() {
  return (
    <main className="min-h-screen bg-stone-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white p-8 md:p-16 shadow-2xl shadow-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase">
                Visit Us
              </span>
              <h1 className="font-serif text-4xl mt-4 mb-8 text-stone-900">
                The Atelier
              </h1>

              <div className="space-y-8 font-light text-stone-600">
                <div>
                  <h3 className="font-bold text-stone-900 uppercase tracking-widest text-sm mb-2">
                    Address
                  </h3>
                  <p>123 Sugar Lane Avenue</p>
                  <p>Suite 500</p>
                  <p>Donut Land, DL 99000</p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-900 uppercase tracking-widest text-sm mb-2">
                    Hours
                  </h3>
                  <p>Mon - Fri: 7am - 3pm</p>
                  <p>Sat - Sun: 8am - 4pm</p>
                </div>

                <div>
                  <h3 className="font-bold text-stone-900 uppercase tracking-widest text-sm mb-2">
                    Contact
                  </h3>
                  <p>hello@donuttheory.com</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-stone-800 mb-6">
                Inquiries
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-800 bg-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-800 bg-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-800 bg-transparent transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="bg-stone-900 text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-amber-900 transition duration-300 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

