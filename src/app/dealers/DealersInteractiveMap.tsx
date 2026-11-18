"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LocateFixed } from "lucide-react";

export interface MapDealer {
  id: number;
  title: string;
  slug?: string;
  name?: string;
  address: string;
  city: string;
  taluka?: string;
  state: string;
  phone: string;
  email?: string;
  mapUrl?: string;
  latitude?: string;
  longitude?: string;
  distance?: number | null;
  coverImage?: string | null;
}

interface DealersInteractiveMapProps {
  dealers: MapDealer[];
  selectedDealer: MapDealer | null;
  onSelectDealer: (dealer: MapDealer | null) => void;
  userLocation: { lat: number; lng: number } | null;
  getDirectionsUrl: (dealer: MapDealer) => string;
  mapMode?: "interactive" | "google";
  onMapModeChange?: (mode: "interactive" | "google") => void;
}

// Custom SVG Pins - Zero asset dependencies, 100% retina sharp
function createDealerIcon(isSelected: boolean) {
  const width = isSelected ? 36 : 26;
  const height = isSelected ? 48 : 34.6;
  const pinColor = isSelected ? "#b91c1c" : "#dc2626";
  const strokeColor = isSelected ? "#f59e0b" : "#ffffff";
  const strokeWidth = isSelected ? 2.5 : 1.5;
  const innerDotR = isSelected ? 4.5 : 3.5;

  return L.divIcon({
    className: `dealer-marker-${isSelected ? "selected" : "normal"}`,
    html: `
      <div style="position: relative; width: ${width}px; height: ${height}px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        ${
          isSelected
            ? `<div style="position: absolute; top: -6px; left: -6px; width: ${width + 12}px; height: ${width + 12}px; border-radius: 50%; background: rgba(220, 38, 38, 0.28); animation: dealerPinPulse 1.8s infinite ease-out; pointer-events: none;"></div>`
            : ""
        }
        <svg viewBox="0 0 24 32" width="${width}" height="${height}" style="overflow: visible; filter: drop-shadow(0 3px 5px rgba(0,0,0,0.35)); transition: transform 0.15s ease;">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" fill="${pinColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
          <circle cx="12" cy="12" r="${innerDotR}" fill="#ffffff" />
        </svg>
      </div>
    `,
    iconSize: [width, height],
    iconAnchor: [width / 2, height],
    popupAnchor: [0, -height + 4],
  });
}

function createUserLocationIcon() {
  return L.divIcon({
    className: "user-location-marker",
    html: `
      <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; width: 32px; height: 32px; border-radius: 50%; background: rgba(37, 99, 235, 0.28); animation: dealerPinPulse 2s infinite ease-out;"></div>
        <div style="width: 14px; height: 14px; border-radius: 50%; background: #2563eb; border: 2.5px solid #ffffff; box-shadow: 0 2px 6px rgba(0,0,0,0.35);"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
}

function buildPopupHtml(dealer: MapDealer, directionsUrl: string): string {
  const displayName = (dealer.name || dealer.title || "Authorized Dealer").replace(/"/g, "&quot;");
  const fullAddress = [
    dealer.address,
    dealer.taluka ? `${dealer.taluka}${dealer.taluka.toLowerCase().includes("taluk") ? "" : " Taluk"}` : "",
    dealer.city,
    dealer.state,
  ]
    .filter(Boolean)
    .join(", ")
    .replace(/"/g, "&quot;");

  const distanceText =
    dealer.distance !== undefined && dealer.distance !== null
      ? dealer.distance < 1
        ? `${Math.round(dealer.distance * 1000)} m away`
        : `${dealer.distance.toFixed(1)} km away`
      : "";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${dealer.name || dealer.title}, ${dealer.city || ""}, Tamil Nadu`
  )}`;

  return `
    <div style="font-family: inherit; padding: 12px 14px; max-width: 290px; line-height: 1.35;">
      <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px;">
        ${
          dealer.taluka
            ? `<span style="font-size: 10px; font-weight: 700; color: #92400e; background: #fef3c7; border: 1px solid #fde68a; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">
                Taluka: ${dealer.taluka}
              </span>`
            : ""
        }
        ${
          dealer.city
            ? `<span style="font-size: 10px; font-weight: 600; color: #374151; background: #f3f4f6; padding: 2px 6px; border-radius: 4px;">
                ${dealer.city}
              </span>`
            : ""
        }
        ${
          distanceText
            ? `<span style="font-size: 10px; font-weight: 700; color: #065f46; background: #d1fae5; padding: 2px 6px; border-radius: 4px;">
                📍 ${distanceText}
              </span>`
            : ""
        }
      </div>

      <h4 style="font-size: 14px; font-weight: 800; color: #111827; margin: 0 0 4px 0; line-height: 1.25;">
        ${displayName}
      </h4>

      <p style="font-size: 11px; color: #4b5563; margin: 0 0 8px 0; line-height: 1.4;">
        ${fullAddress}
      </p>

      ${
        dealer.phone
          ? `<div style="margin-bottom: 10px;">
              <a href="tel:${dealer.phone}" style="display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 700; color: #dc2626; text-decoration: none;">
                📞 ${dealer.phone}
              </a>
            </div>`
          : ""
      }

      <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #f3f4f6; display: flex; flex-direction: column; gap: 6px;">
        <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; box-sizing: border-box; text-align: center; background: #dc2626; color: #ffffff; font-size: 11px; font-weight: 700; padding: 7px 10px; border-radius: 8px; text-decoration: none; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
          Get Directions ↗
        </a>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; box-sizing: border-box; text-align: center; background: #f3f4f6; color: #1f2937; font-size: 10px; font-weight: 600; padding: 5px 8px; border-radius: 6px; text-decoration: none; border: 1px solid #e5e7eb;">
          View on Google Maps ↗
        </a>
      </div>
    </div>
  `;
}

function isCoordValid(lat: number, lng: number): boolean {
  return !isNaN(lat) && !isNaN(lng) && lat >= 6 && lat <= 38 && lng >= 68 && lng <= 98;
}

export default function DealersInteractiveMap({
  dealers,
  selectedDealer,
  onSelectDealer,
  userLocation,
  getDirectionsUrl,
  mapMode = "interactive",
}: DealersInteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const markerMapRef = useRef<Map<number, L.Marker>>(new Map());
  const userMarkerRef = useRef<L.Marker | null>(null);

  // Both modes use Google Maps tiles (no Carto)
  const createTileLayer = useCallback((mode: "interactive" | "google"): L.TileLayer => {
    if (mode === "google") {
      // Google Hybrid Satellite
      return L.tileLayer("https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["0", "1", "2", "3"],
        attribution: '&copy; <a href="https://www.google.com/maps" target="_blank" rel="noopener">Google Maps</a>',
      });
    }

    // Interactive Map: Google Maps Roadmap / Street View (instead of Carto)
    return L.tileLayer("https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["0", "1", "2", "3"],
      attribution: '&copy; <a href="https://www.google.com/maps" target="_blank" rel="noopener">Google Maps</a>',
    });
  }, []);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Center on Tamil Nadu [11.1271, 78.6569]
    const leafletMap = L.map(mapContainerRef.current, {
      center: [11.1271, 78.6569],
      zoom: 7,
      minZoom: 6,
      maxZoom: 19,
      zoomControl: false,
    });

    // Zoom control at bottom right
    L.control.zoom({ position: "bottomright" }).addTo(leafletMap);

    // Markers layer group
    const markersGroup = L.layerGroup().addTo(leafletMap);
    markersGroupRef.current = markersGroup;

    setMap(leafletMap);

    // ResizeObserver to handle container layout changes, drawer toggles, and screen rotations
    const ro = new ResizeObserver(() => {
      leafletMap.invalidateSize();
    });
    ro.observe(mapContainerRef.current);

    const timer = setTimeout(() => {
      leafletMap.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      leafletMap.remove();
      setMap(null);
    };
  }, []);

  // Update Tile Layer when mapMode changes
  useEffect(() => {
    if (!map) return;

    if (tileLayerRef.current) {
      tileLayerRef.current.remove();
    }

    const newLayer = createTileLayer(mapMode);
    newLayer.addTo(map);
    tileLayerRef.current = newLayer;
  }, [mapMode, map, createTileLayer]);

  // Update Markers based on Dealers list
  useEffect(() => {
    if (!map || !markersGroupRef.current) return;

    const group = markersGroupRef.current;
    group.clearLayers();
    markerMapRef.current.clear();

    const validBoundsPoints: L.LatLngExpression[] = [];

    dealers.forEach((dealer) => {
      if (!dealer.latitude || !dealer.longitude) return;

      const lat = parseFloat(dealer.latitude);
      const lng = parseFloat(dealer.longitude);
      if (!isCoordValid(lat, lng)) return;

      const isSelected = selectedDealer?.id === dealer.id;
      const marker = L.marker([lat, lng], {
        icon: createDealerIcon(isSelected),
        zIndexOffset: isSelected ? 1000 : 0,
        title: dealer.name || dealer.title,
      });

      // Quick hover tooltip
      marker.bindTooltip(
        `<div style="font-weight: 700; font-size: 11px; color: #111827;">${dealer.name || dealer.title}</div>
         ${dealer.city ? `<div style="font-size: 10px; color: #4b5563;">${dealer.taluka ? `${dealer.taluka}, ` : ""}${dealer.city}</div>` : ""}`,
        {
          direction: "top",
          offset: [0, isSelected ? -44 : -34],
          className: "custom-dealer-map-tooltip",
        }
      );

      // Full interactive popup on click
      const popupHtml = buildPopupHtml(dealer, getDirectionsUrl(dealer));
      marker.bindPopup(popupHtml, {
        className: "custom-dealer-map-popup",
        maxWidth: 320,
        autoPanPadding: [20, 20],
      });

      marker.on("click", () => {
        onSelectDealer(dealer);
      });

      marker.addTo(group);
      markerMapRef.current.set(dealer.id, marker);
      validBoundsPoints.push([lat, lng]);
    });

    // Auto-fit bounds if no specific dealer is currently selected
    if (!selectedDealer && validBoundsPoints.length > 0) {
      if (validBoundsPoints.length === 1) {
        map.setView(validBoundsPoints[0], 14, { animate: true });
      } else {
        const bounds = L.latLngBounds(validBoundsPoints);
        map.fitBounds(bounds, {
          padding: [45, 45],
          maxZoom: 13,
          animate: true,
        });
      }
    }
  }, [map, dealers, getDirectionsUrl, onSelectDealer, selectedDealer]);

  // Sync Selected Dealer: fly to coordinate, highlight pin, and open popup
  useEffect(() => {
    if (!map) return;

    // Update icons
    markerMapRef.current.forEach((marker, id) => {
      const isSelected = selectedDealer?.id === id;
      marker.setIcon(createDealerIcon(isSelected));
      marker.setZIndexOffset(isSelected ? 1000 : 0);
    });

    if (selectedDealer && selectedDealer.latitude && selectedDealer.longitude) {
      const lat = parseFloat(selectedDealer.latitude);
      const lng = parseFloat(selectedDealer.longitude);

      if (isCoordValid(lat, lng)) {
        map.flyTo([lat, lng], Math.max(map.getZoom(), 15), {
          duration: 0.8,
        });

        const targetMarker = markerMapRef.current.get(selectedDealer.id);
        if (targetMarker) {
          const timer = setTimeout(() => {
            targetMarker.openPopup();
          }, 350);
          return () => clearTimeout(timer);
        }
      }
    }
  }, [selectedDealer, map]);

  // User Location Marker
  useEffect(() => {
    if (!map) return;

    if (userLocation && isCoordValid(userLocation.lat, userLocation.lng)) {
      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng([userLocation.lat, userLocation.lng]);
      } else {
        const userMarker = L.marker([userLocation.lat, userLocation.lng], {
          icon: createUserLocationIcon(),
          zIndexOffset: 999,
          title: "Your Location",
        });
        userMarker.bindTooltip("You are here", { direction: "top", offset: [0, -16] });
        userMarker.addTo(map);
        userMarkerRef.current = userMarker;
      }
    } else if (userMarkerRef.current) {
      userMarkerRef.current.remove();
      userMarkerRef.current = null;
    }
  }, [userLocation, map]);

  // Center on user location
  const handleCenterOnUser = useCallback(() => {
    if (userLocation && isCoordValid(userLocation.lat, userLocation.lng)) {
      map?.flyTo([userLocation.lat, userLocation.lng], 15, { duration: 0.8 });
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          if (isCoordValid(lat, lng)) {
            map?.flyTo([lat, lng], 15, { duration: 0.8 });
          }
        },
        (err) => {
          console.warn("Geolocation notice:", err);
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    }
  }, [map, userLocation]);

  return (
    <div className="relative w-full h-full min-h-[440px] lg:min-h-[660px] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
      {/* Embedded CSS for Leaflet resets and custom styling */}
      <style jsx global>{`
        @keyframes dealerPinPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Fix Tailwind vs Leaflet tile images */
        .leaflet-pane img,
        .leaflet-tile-container img {
          max-width: none !important;
          max-height: none !important;
        }

        .leaflet-container {
          width: 100%;
          height: 100%;
          font-family: inherit;
          z-index: 10;
        }

        .leaflet-div-icon {
          background: transparent !important;
          border: none !important;
        }

        /* Custom Popup styling */
        .custom-dealer-map-popup .leaflet-popup-content-wrapper {
          border-radius: 14px;
          padding: 0;
          box-shadow: 0 16px 30px -6px rgba(0, 0, 0, 0.2), 0 8px 12px -4px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .custom-dealer-map-popup .leaflet-popup-content {
          margin: 0;
          line-height: 1.4;
        }

        .custom-dealer-map-popup .leaflet-popup-tip-container {
          margin-top: -1px;
        }

        .custom-dealer-map-tooltip {
          background: #ffffff !important;
          border: 1px solid rgba(0, 0, 0, 0.12) !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
          padding: 6px 10px !important;
        }
      `}</style>

      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Top Overlay: Only My Location button */}
      <div className="absolute top-3 right-3 z-[400] pointer-events-none">
        <button
          onClick={handleCenterOnUser}
          className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-2 bg-white/95 backdrop-blur-md hover:bg-white text-gray-800 hover:text-red-600 rounded-xl shadow-md border border-black/10 text-xs font-bold transition-all cursor-pointer active:scale-95"
          title="Center map on my location"
        >
          <LocateFixed className="w-4 h-4 text-red-600" />
          <span>My Location</span>
        </button>
      </div>
    </div>
  );
}
