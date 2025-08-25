declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
  class Map {
    constructor(mapDiv: HTMLElement, opts?: MapOptions);
  }
  
  class Marker {
    constructor(opts?: MarkerOptions);
  }

  namespace marker {
    class AdvancedMarkerElement {
      constructor(opts?: AdvancedMarkerOptions);
    }
    
    interface AdvancedMarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      content?: HTMLElement;
    }
  }
  
  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    styles?: MapTypeStyle[];
  }
  
  interface MarkerOptions {
    position?: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    icon?: string | Icon | Symbol;
  }
  
  interface LatLng {
    lat(): number;
    lng(): number;
  }
  
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  
  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers?: Array<{ [key: string]: any }>;
  }
  
  interface Icon {
    url: string;
    scaledSize?: Size;
    anchor?: Point;
  }
  
  interface Size {
    width: number;
    height: number;
  }
  
  interface Point {
    x: number;
    y: number;
  }
  
  class Size {
    constructor(width: number, height: number);
  }
  
  class Point {
    constructor(x: number, y: number);
  }
}

export {};
