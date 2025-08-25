import { useEffect, useRef } from 'react';

interface InteractiveMapProps {
  location: string;
  googleMapsUrl: string;
}

export default function InteractiveMap({ location, googleMapsUrl }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  // Function to create custom marker element
  const createCustomMarker = () => {
    const markerElement = document.createElement('div');
    markerElement.innerHTML = `
      <div style="
        width: 32px; 
        height: 32px; 
        background: #DC2626; 
        border-radius: 50% 50% 50% 0; 
        transform: rotate(-45deg); 
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          color: white;
          font-size: 16px;
          font-weight: bold;
        ">📍</div>
      </div>
    `;
    return markerElement;
  };

  // Function to show preview map when API key is not available
  const showPreviewMap = () => {
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 relative overflow-hidden rounded-xl">
          <!-- Map-like background pattern -->
          <div class="absolute inset-0 opacity-30">
            <div class="w-full h-full" style="
              background-image: 
                linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
                linear-gradient(0deg, #e5e7eb 1px, transparent 1px);
              background-size: 20px 20px;
            "></div>
          </div>
          
          <!-- Roads -->
          <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
          <div class="absolute top-0 left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
          
          <!-- Buildings/POIs -->
          <div class="absolute top-1/4 left-1/4 w-8 h-8 bg-gray-400 rounded-sm"></div>
          <div class="absolute top-1/4 right-1/4 w-6 h-6 bg-gray-400 rounded-sm"></div>
          <div class="absolute bottom-1/4 left-1/3 w-10 h-8 bg-gray-400 rounded-sm"></div>
          <div class="absolute bottom-1/3 right-1/3 w-7 h-9 bg-gray-400 rounded-sm"></div>
          
          <!-- Water body (Lake Suchitlán) -->
          <div class="absolute bottom-0 right-0 w-24 h-20 bg-blue-200 rounded-tl-full opacity-60"></div>
          
          <!-- Location marker -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
              <div class="bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 shadow-md whitespace-nowrap">
                Villa Suchimex
              </div>
            </div>
          </div>
          
          <!-- Map controls preview -->
          <div class="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
            <div class="space-y-1">
              <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm font-bold">+</div>
              <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm font-bold">−</div>
            </div>
          </div>
          
          <!-- Compass -->
          <div class="absolute top-4 left-4 bg-white rounded-full w-12 h-12 shadow-md flex items-center justify-center">
            <div class="w-8 h-8 border-2 border-gray-300 rounded-full relative">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-red-500"></div>
              <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-0.5 bg-gray-400"></div>
            </div>
          </div>
        </div>
      `;
    }
  };

  useEffect(() => {
    // Check if API key is configured
    const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey || apiKey === 'YOUR_API_KEY') {
      console.error('Google Maps API key not configured. Please set VITE_GOOGLE_MAPS_API_KEY in your environment variables.');
      // Show preview map instead
      showPreviewMap();
      return;
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
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

        // Use the new AdvancedMarkerElement (recommended) or fallback to Marker
        if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
          // New recommended way
          new window.google.maps.marker.AdvancedMarkerElement({
            position: suchitoto,
            map: map,
            title: "Villa Suchimex",
            content: createCustomMarker()
          });
        } else {
          // Fallback to traditional Marker
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
      }
    };

    script.onerror = () => {
      console.error('Failed to load Google Maps API');
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
            
            {/* Show different content based on API key availability */}
            {!process.env.VITE_GOOGLE_MAPS_API_KEY || process.env.VITE_GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY' ? (
              <div className="space-y-2">
                <p className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                  Vista previa del mapa
                </p>
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
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
