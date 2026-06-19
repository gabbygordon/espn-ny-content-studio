export default function Home() {
  const cards = [
    "Thumbnail Generator",
    "AI Headlines",
    "SEO Titles",
    "Descriptions",
    "Asset Library",
    "Settings",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          ESPN NY Content Studio
        </h1>

        <p className="text-zinc-400 mb-10">
          AI-Powered Content Creation Platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{card}</h2>
              <p className="text-zinc-400 mt-2">
                Open {card}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}