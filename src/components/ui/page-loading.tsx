export function PageLoading({ label = "Loading page…" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 pt-36 text-center"
    >
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-brand"
      />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}
