async function loadCSV(url) {
    const res = await fetch(url);
    const text = await res.text();
  
    const rows = text.split("\n").map(r => r.split(","));
    const headers = rows.shift();
  
    return rows.map(row => {
      let obj = {};
      headers.forEach((h,i) => obj[h.trim()] = row[i]?.trim());
      return obj;
    });
  }
  