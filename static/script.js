document.getElementById("ipForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const ip = document.getElementById("ip").value;

  // Call IPinfo API with your key
  fetch(`https://ipinfo.io/${ip}?token=253b7d869104f8`)
    .then(response => response.json())
    .then(data => {
      const info = `
        🌐 IP: ${data.ip || "N/A"}
        📍 Location: ${data.city || "N/A"}, ${data.region || "N/A"}, ${data.country || "N/A"}
        🕸️ ISP: ${data.org || "N/A"}
        🧭 Coordinates: ${data.loc || "N/A"}
        🏙️ Postal: ${data.postal || "N/A"}
        🕒 Timezone: ${data.timezone || "N/A"}
      `;
      document.getElementById("result").innerText = info;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Error fetching IP info: " + err;
    });
});