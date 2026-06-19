"use client";
import { useState } from "react";
export default function ThumbnailGenerator() {
     const [headline, setHeadline] = useState("AARON JUDGE OUT");
     const [subheadline, setSubheadline] = useState("");
     const [show, setShow] = useState("Michael Kay Show");
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
              value={headline}
onChange={(e) => setHeadline(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2">Subheadline</label>
            <input
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
              placeholder="Game 7 Thriller"
              value={subheadline}
onChange={(e) => setSubheadline(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2">Show</label>
            <select
  className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
  value={show}
  onChange={(e) => setShow(e.target.value)}
>
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

         <div className="aspect-video bg-gradient-to-br from-blue-900 to-black rounded flex items-center justify-center text-center p-6">
  <div>
    <div className="inline-block mt-4 bg-red-600 px-3 py-1 rounded font-bold">
  {show}
</div>
    <div className="text-4xl font-black text-yellow-400">
      {headline}
    </div>

    <div className="text-xl mt-2">
      {subheadline || "ENTER SUBHEADLINE"}
    </div>
  </div>
</div>
        </div>
      </div>
    </main>
  );
}