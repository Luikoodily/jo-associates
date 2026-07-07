"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const digest = error.digest;
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#050a1c] px-4 text-white">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
            System error
          </p>
          <h1 className="mt-4 text-3xl font-semibold">
            We hit an unexpected fault.
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Please refresh the page. If the issue persists, contact our team
            directly.
            {digest ? ` Reference: ${digest}` : null}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Reload application
          </button>
        </div>
      </body>
    </html>
  );
}
