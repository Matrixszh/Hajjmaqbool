// src/components/KeyAssurances.tsx
export default function KeyAssurances() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
      <h3 className="text-lg md:text-xl font-semibold text-slate-900">Key assurances:</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>
          Only the Nusuk Hajj website handles bookings, payments, and Hajj visas for serviced countries; third‑party agents cannot issue Hajj visas or take payment outside Nusuk.
        </li>
        <li>
          The Nusuk app on Apple/Google stores supports Umrah/Rawdah services and guidance, but it is not the Hajj application channel.
        </li>
      </ul>
    </section>
  );
}
