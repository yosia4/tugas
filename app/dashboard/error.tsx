'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-4 text-red-500">
      Terjadi kesalahan saat memuat dashboard: {error.message}
    </div>
  );
}
