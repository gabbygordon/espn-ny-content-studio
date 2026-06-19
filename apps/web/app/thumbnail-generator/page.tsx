export default function ThumbnailGenerator() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        ESPN NY Thumbnail Generator
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Headline</label>
            <input
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
              placeholder="Knicks Complete Historic Comeback"
            />
          </div>

          <div>
            <label className="block mb-2">Subheadline</label>
            <input
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
              placeholder="Game 7 Thriller"
            />
          </div>

          <div>
            <label className="block mb-2">Show</label>
            <select className="w-full p-3 rounded bg-zinc-900 border border-zinc-700">
              <option>Michael Kay Show</option>
              <option>Bart & Carlin</option>
              <option>Don, Hahn & Rosenberg</option>
              <option>DiPietro & Rothenberg</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Image URL</label>
            <input
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
              placeholder="https://..."
            />
          </div>

          <button className="bg-red-600 px-6 py-3 rounded font-bold">
            Generate Thumbnail
          </button>
        </div>

        {/* Preview */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Preview</h2>

          <div className="aspect-video bg-zinc-800 rounded flex items-center justify-center">
            Thumbnail Preview
          </div>
        </div>
      </div>
    </main>
  );
}