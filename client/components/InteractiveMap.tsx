import { useEffect, useRef } from 'react';

interface InteractiveMapProps {
  location: string;
  googleMapsUrl: string;
}

export default function InteractiveMap({ location, googleMapsUrl }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (mapRef.current && window.google) {
        // Coordinates for Suchitoto, Cuscatlán, El Salvador
        const suchitoto = { lat: 13.9389, lng: -89.0308 };
        
        const map = new window.google.maps.Map(mapRef.current, {
          center: suchitoto,
          zoom: 15,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        // Add marker
        new window.google.maps.Marker({
          position: suchitoto,
          map: map,
          title: "Villa Suchimex",
          icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#DC2626"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(16, 32)
          }
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white luxury-shadow premium-hover overflow-hidden rounded-xl">
      <div className="h-96 bg-gradient-to-br from-emerald-100 via-terracotta-50 to-gold-100 relative overflow-hidden">
        {/* Map Container */}
        <div 
          ref={mapRef} 
          className="w-full h-full rounded-xl"
          style={{ minHeight: '384px' }}
        />
        
        {/* Overlay with info */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="text-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 luxury-shadow">
              <svg className="w-6 h-6 text-terracotta-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-serif font-bold text-terracotta-700 mb-1">Mapa Interactivo</h3>
            <p className="text-sm text-gray-600 mb-3">{location}</p>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-terracotta-500 to-emerald-500 hover:from-terracotta-600 hover:to-emerald-600 text-white rounded-lg px-4 py-2 text-sm transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
