// Initialize the map
const map = L.map('map').setView([45.5017, -73.5673], 13); // Center the map on Montreal

// Add a tile layer (map tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// List of known places where homeless people can get help
const places = [
    {
        name: "Welcome Hall Mission",
        address: "1555 Rue Amherst, Montreal, QC H3J 1X6",
        coordinates: [45.5087, -73.5594],
        description: "Provides meals, shelter, and support services."
    },
    {
        name: "Old Brewery Mission",
        address: "1902 Rue Berri, Montreal, QC H2L 1C3",
        coordinates: [45.5032, -73.5650],
        description: "Offers emergency shelter, meals, and support services."
    },
    {
        name: "Catholic Charities",
        address: "1155 Rue Saint-Alexandre, Montreal, QC H3B 1H6",
        coordinates: [45.4979, -73.5671],
        description: "Provides a variety of social services and support."
    },
    {
        name: "Centre d'Action Benevole de Montréal",
        address: "1525 Rue de Gaspé, Montreal, QC H2J 1X6",
        coordinates: [45.5250, -73.5880],
        description: "Offers meals, clothing, and support services."
    },
    {
        name: "Atwater Mission",
        address: "2155 Rue Notre-Dame Ouest, Montreal, QC H3J 1S5",
        coordinates: [45.4887, -73.5794],
        description: "Provides meals, shelter, and support services."
    },
    {
        name: "L'Ange-Gardien",
        address: "1555 Rue Sainte-Catherine Ouest, Montreal, QC H3G 2C3",
        coordinates: [45.5024, -73.5818],
        description: "Offers shelter, meals, and support services."
    },
    {
        name: "La Maison de la Gare",
        address: "1055 Rue Saint-Denis, Montreal, QC H2X 3T2",
        coordinates: [45.5102, -73.5751],
        description: "Provides shelter and support services for homeless youth."
    },
    {
        name: "Chez Doris",
        address: "1255 Rue Sainte-Catherine Ouest, Montreal, QC H3G 1M8",
        coordinates: [45.4996, -73.5739],
        description: "Offers shelter, meals, and support services for women."
    },
    {
        name: "Accueil Bonneau",
        address: "1495 Rue Amherst, Montreal, QC H2X 1A1",
        coordinates: [45.5077, -73.5600],
        description: "Provides shelter and support services for homeless youth."
    },
    {
        name: "L'Accueil Bonneau - Service de rue",
        address: "1555 Rue Amherst, Montreal, QC H2X 1A1",
        coordinates: [45.5087, -73.5594],
        description: "Offers meals and support services for homeless individuals."
    }
];

// Add markers for each place
places.forEach(place => {
    L.marker(place.coordinates).addTo(map)
        .bindPopup(`
            <div class="marker-popup">
                <strong>${place.name}</strong><br>
                ${place.address}<br>
                <p>${place.description}</p>
            </div>
        `);
});