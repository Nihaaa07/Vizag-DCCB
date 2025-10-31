import React, { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import "./PACS.css";
import pacsCSV from "../../Data/PACS.csv"; // ✅ your CSV in src/Data
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

/* -------------------------
   Approximate district coordinates (update later if you want more precision)
   ------------------------- */
const districtCoords = {
  VISAKHAPATNAM: { lat: 17.6868, lng: 83.2185 },
  ANAKAPALLI: { lat: 17.6643, lng: 83.0169 },
  "ALLURI SEETHA RAMA RAJU": { lat: 18.3333, lng: 82.6833 },
};

/* Create default Leaflet marker icon to avoid bundling issues */
const createMarkerIcon = () =>
  new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

function FitBounds({ coordsList }) {
  const map = useMap();
  useEffect(() => {
    if (!coordsList || coordsList.length === 0) return;
    const bounds = coordsList.map((c) => [c.lat, c.lng]);
    map.fitBounds(bounds, { padding: [60, 60] });
  }, [coordsList, map]);
  return null;
}

export default function PACS() {
  const [pacsData, setPacsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const markerIcon = useMemo(() => createMarkerIcon(), []);

  // parse CSV on mount (your CSV import resolves to a URL)
  useEffect(() => {
    Papa.parse(pacsCSV, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const normalized = result.data.map((r) => ({
          sl: r["Sl. No."] ?? r["Sl No"] ?? r["Sl. No"],
          District: (r.District || "").trim(),
          GeneralName: r["General Name"] ?? r["GeneralName"] ?? r["General Name"],
          FullName: r["Full Name"] ?? r["FullName"],
          CEO: r["CEO Name"] ?? r["CEO Name"] ?? r.CEO ?? "",
          Contact: r["Contact No."] ?? r["Contact No"] ?? r.Contact ?? "",
          Address:
            r["Postal Address"] ??
            r["PostalAddress"] ??
            r.PostalAddress ??
            r.Address ??
            "",
        }));
        setPacsData(normalized);
      },
      error: (err) => {
        console.error("Error parsing PACS.csv:", err);
      },
    });
  }, []);

  // unique districts from CSV (keeps capitalization as in CSV)
  const districts = useMemo(
    () =>
      Array.from(
        new Set(pacsData.map((p) => p.District).filter((d) => d && d.length))
      ),
    [pacsData]
  );

  // markers for districts we have coordinates for
  const markers = useMemo(
    () =>
      districts
        .filter((d) => districtCoords[d])
        .map((d) => ({ district: d, ...districtCoords[d] })),
    [districts]
  );

  // compute filtered list based on search + selectedDistrict
  const filtered = useMemo(() => {
    const s = searchTerm.trim().toLowerCase();
    return pacsData.filter((p) => {
      const matchesSearch =
        !s ||
        (p.District || "").toLowerCase().includes(s) ||
        (p.GeneralName || "").toLowerCase().includes(s) ||
        (p.CEO || "").toLowerCase().includes(s);
      const matchesDistrict = !selectedDistrict || p.District === selectedDistrict;
      return matchesSearch && matchesDistrict;
    });
  }, [pacsData, searchTerm, selectedDistrict]);

  const onMarkerClick = (district) => {
    setSelectedDistrict(district);
    setSearchTerm(""); // optional: clear search on marker click to show all in district
  };

  const resetFilter = () => {
    setSelectedDistrict(null);
    setSearchTerm("");
  };

  return (
    <section className="pacs-section pacs-map-section">
      <div className="pacs-header-container">
        <h1 className="pacs-title">
          Primary Agricultural Cooperative Societies (PACS)
        </h1>
        <p className="pacs-subtitle">
          Explore the list of PACS across various districts — click a district
          marker to filter results.
        </p>
      </div>

      <div className="pacs-controls">
        <div className="pacs-search-container">
          <input
            type="text"
            placeholder="🔍 Search by District, PACS Name, or CEO..."
            className="pacs-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="pacs-filter-row">
          <button
            className={`district-pill ${!selectedDistrict ? "active" : ""}`}
            onClick={resetFilter}
            aria-pressed={!selectedDistrict}
          >
            All Districts
          </button>

          {districts.map((d) => (
            <button
              key={d}
              className={`district-pill ${selectedDistrict === d ? "active" : ""}`}
              onClick={() => setSelectedDistrict(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="pacs-map-grid">
        <div className="map-column">
          {markers.length ? (
            <MapContainer
              style={{ height: "420px", width: "100%", borderRadius: 12 }}
              center={[17.8, 83.0]}
              zoom={8}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <FitBounds coordsList={markers} />
              {markers.map((m) => (
                <Marker
                  key={m.district}
                  position={[m.lat, m.lng]}
                  icon={markerIcon}
                  eventHandlers={{
                    click: () => onMarkerClick(m.district),
                  }}
                >
                  <Popup>
                    <strong>{m.district}</strong>
                    <div style={{ marginTop: 6 }}>
                      Click marker or press the district button to view PACS here.
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="map-placeholder">Map markers loading…</div>
          )}
        </div>

        <div className="cards-column">
          <div className="cards-header">
            <h3>
              {selectedDistrict ? `${selectedDistrict} — PACS` : "All PACS"}
              <span className="result-count"> ({filtered.length})</span>
            </h3>
            <small className="cards-subtext">
              {selectedDistrict
                ? `Showing PACS in ${selectedDistrict}.`
                : "Showing all PACS. Use search or click a district marker to filter."}
            </small>
          </div>

          <div className="pacs-grid">
            {filtered.length > 0 ? (
              filtered.map((p, idx) => (
                <article key={idx} className="pacs-card">
                  <div className="pacs-card-header">
                    <h2>{p.GeneralName}</h2>
                    <span className="pacs-district">{p.District}</span>
                  </div>
                  <p className="pacs-fullname">{p.FullName}</p>
                  <p>
                    <strong>CEO:</strong> {p.CEO || <span className="muted">N/A</span>}
                  </p>
                  <p>
                    <strong>Contact:</strong> {p.Contact || <span className="muted">N/A</span>}
                  </p>
                  <p className="pacs-address">
                    <strong>Address:</strong> {p.Address}
                  </p>
                </article>
              ))
            ) : (
              <p className="no-results">No PACS found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
