import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { X } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default icon issue with bundlers
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapPickerProps {
    open: boolean;
    onClose: () => void;
    onSelect: (lat: number, lng: number) => void;
}

const LocationMarker = ({ position, setPosition }: { position: L.LatLng | null, setPosition: (pos: L.LatLng) => void }) => {
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        },
    });

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
};

const MapPicker = ({ open, onClose, onSelect }: MapPickerProps) => {
    const [position, setPosition] = useState<L.LatLng | null>(null);

    // Default to Rawalpindi coordinates
    const defaultCenter: L.LatLngExpression = [33.5651, 73.0169];

    useEffect(() => {
        if (open) {
            // Try to get current user location as default when modal opens
            navigator.geolocation.getCurrentPosition(
                (pos) => setPosition(new L.LatLng(pos.coords.latitude, pos.coords.longitude)),
                () => console.warn("Geolocation denied or unavailable")
            );
        }
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-card w-full max-w-lg rounded-xl shadow-lg overflow-hidden border border-border flex flex-col">
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <div>
                        <h3 className="font-semibold text-lg text-foreground">Select Delivery Location</h3>
                        <p className="text-xs text-muted-foreground">Tap on the map to place the pin</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
                        <X size={20} className="text-muted-foreground" />
                    </button>
                </div>

                <div className="h-[400px] w-full relative bg-muted z-0">
                    <MapContainer center={position || defaultCenter} zoom={13} className="w-full h-full" zoomControl={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker position={position} setPosition={setPosition} />
                    </MapContainer>
                </div>

                <div className="p-4 bg-muted/30 border-t border-border flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors text-foreground"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            if (position) {
                                onSelect(position.lat, position.lng);
                                onClose();
                            } else {
                                alert("Please tap on the map to select a location first.");
                            }
                        }}
                        disabled={!position}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Confirm Location
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default MapPicker;
