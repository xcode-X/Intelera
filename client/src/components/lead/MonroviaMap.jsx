import { MapPin } from 'lucide-react';

const MONROVIA_CENTER = '6.3156,-10.8074';
const MONROVIA_ZOOM = 13;
const GOOGLE_MAPS_EMBED_KEY = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY;

// Without API key: use query-format embed (Monrovia center, zoom 13). Users can switch to satellite in the map UI.
const MONROVIA_EMBED_NO_KEY =
  'https://maps.google.com/maps?q=6.3156,-10.8074&z=13&output=embed';

const satelliteEmbedUrl = GOOGLE_MAPS_EMBED_KEY
  ? `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_EMBED_KEY}&center=${MONROVIA_CENTER}&zoom=${MONROVIA_ZOOM}&maptype=satellite`
  : MONROVIA_EMBED_NO_KEY;

const openInGoogleMaps = 'https://www.google.com/maps/@6.3156,-10.8074,13z/data=!3m1!1e3';

export default function MonroviaMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-full min-h-[240px] flex flex-col">
      <div className="px-3 py-2 flex items-center gap-2 border-b border-white/10 bg-white/5">
        <MapPin className="w-4 h-4 text-[#0EA5E9]" strokeWidth={2} />
        <span className="text-xs font-semibold text-white uppercase tracking-wider">Monrovia, Liberia</span>
      </div>
      <div className="flex-1 relative min-h-[200px]">
        <iframe
          title="Google Maps — Monrovia, Liberia (satellite view)"
          src={satelliteEmbedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {!GOOGLE_MAPS_EMBED_KEY && (
          <a
            href={openInGoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 px-3 py-1.5 rounded-lg bg-stone-900/90 text-white text-xs font-medium hover:bg-stone-900 transition"
          >
            Open in Google Maps ↗
          </a>
        )}
      </div>
    </div>
  );
}
