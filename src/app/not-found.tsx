"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 404 content */}
      <main className="flex-1 flex items-center justify-center px-containerX lg:px-containerXlg">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">Ups! 404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            Pagina nu a fost găsită
          </h2>
          <p className="mt-2 text-gray-600">
            Ne pare rău, pagina pe care o căutați nu există.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              Pagina principală
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
