
export async function fetchShopsByCategory(category, lat, lon) {
  const query = `
    [out:json][timeout:25];
    (
      node["shop"="${category}"](around:2000,${lat},${lon});
      way["shop"="${category}"](around:2000,${lat},${lon});
      relation["shop"="${category}"](around:2000,${lat},${lon});
    );
    out center;
  `;

  const response = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `data=${encodeURIComponent(query)}`
  });

  if (!response.ok) {
    throw new Error('Failed to fetch shops');
  }

  const data = await response.json();

  return data.elements.map(el => ({
    id: el.id,
    lat: el.lat || el.center?.lat,
    lon: el.lon || el.center?.lon,
    name: el.tags?.name || 'Unnamed Shop',
    category: category
  }));
}
