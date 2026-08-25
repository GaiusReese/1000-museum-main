const budgetItems = [
  {
    zone: "A",
    item: "Entry vine arch frame + garland wrap",
    qty: 1,
    lean: 650,
    target: 1100,
    full: 1600,
    source: "Florist / build",
    notes: "Freestanding; no wall mount",
  },
  {
    zone: "A",
    item: "Areca palm (8–10 ft) in planter",
    qty: 2,
    lean: 150,
    target: 210,
    full: 280,
    source: "Plant rental",
    notes: "Black or natural wicker pot",
  },
  {
    zone: "A",
    item: "Moss runner strips (floor protection)",
    qty: 3,
    lean: 35,
    target: 55,
    full: 75,
    source: "Buy",
    notes: "Lay before all furniture",
  },
  {
    zone: "A",
    item: "Scent diffusers + oils",
    qty: 2,
    lean: 45,
    target: 75,
    full: 95,
    source: "Buy",
    notes: "Vetiver, fig, green tea",
  },
  {
    zone: "B",
    item: "Large floor palm / bird of paradise cluster",
    qty: 6,
    lean: 165,
    target: 240,
    full: 320,
    source: "Plant rental",
    notes: "Includes uplight per cluster",
  },
  {
    zone: "B",
    item: "Portable greenery wall panel (8×8 ft)",
    qty: 2,
    lean: 900,
    target: 1400,
    full: 2200,
    source: "Plant rental",
    notes: "Behind DJ only",
  },
  {
    zone: "B",
    item: "Dance floor overlay / floor protection",
    qty: 1,
    lean: 600,
    target: 1200,
    full: 2000,
    source: "Event rental",
    notes: "Matte black interlock or masonite",
  },
  {
    zone: "B",
    item: "DJ booth bamboo + vine styling",
    qty: 1,
    lean: 180,
    target: 320,
    full: 450,
    source: "Stylist",
    notes: "Wrap existing furniture only",
  },
  {
    zone: "B",
    item: "Leaf gobo projector + amber gel",
    qty: 1,
    lean: 250,
    target: 420,
    full: 600,
    source: "AV rental",
    notes: "Slow rotation",
  },
  {
    zone: "B",
    item: "Hanging macrame fern basket",
    qty: 8,
    lean: 75,
    target: 120,
    full: 165,
    source: "Plant rental",
    notes: "Varied drop heights",
  },
  {
    zone: "B",
    item: "Warm amber uplight",
    qty: 10,
    lean: 35,
    target: 50,
    full: 65,
    source: "Lighting rental",
    notes: "Place behind plants",
  },
  {
    zone: "C",
    item: "Rattan peacock chair",
    qty: 4,
    lean: 75,
    target: 110,
    full: 150,
    source: "Furniture rental",
    notes: "Weighted on terrace",
  },
  {
    zone: "C",
    item: "Low teak / bamboo coffee table",
    qty: 2,
    lean: 55,
    target: 85,
    full: 120,
    source: "Furniture rental",
    notes: "Felt pads required",
  },
  {
    zone: "C",
    item: "Outdoor jute rug (large)",
    qty: 1,
    lean: 120,
    target: 190,
    full: 260,
    source: "Rental",
    notes: "Weighted corners",
  },
  {
    zone: "C",
    item: "LED lantern cluster",
    qty: 12,
    lean: 12,
    target: 18,
    full: 25,
    source: "Buy / rent",
    notes: "No open flame outdoors",
  },
  {
    zone: "C",
    item: "Portable mist fan",
    qty: 2,
    lean: 95,
    target: 150,
    full: 220,
    source: "Event rental",
    notes: "Inside plant groupings",
  },
  {
    zone: "C",
    item: "Slim areca line along railing",
    qty: 4,
    lean: 110,
    target: 165,
    full: 210,
    source: "Plant rental",
    notes: "Keep bay sightlines open",
  },
  {
    zone: "D",
    item: "Freestanding rattan bar-back shelf",
    qty: 1,
    lean: 160,
    target: 280,
    full: 400,
    source: "Furniture rental",
    notes: "No wall attachment",
  },
  {
    zone: "D",
    item: "Table foliage runner (mixed tropical)",
    qty: 1,
    lean: 220,
    target: 380,
    full: 550,
    source: "Florist",
    notes: "Full dining length",
  },
  {
    zone: "D",
    item: "Low tropical centerpiece",
    qty: 6,
    lean: 55,
    target: 95,
    full: 140,
    source: "Florist",
    notes: "Orchid + monstera + banana leaf",
  },
  {
    zone: "D",
    item: "Ice well with greenery skirt",
    qty: 2,
    lean: 45,
    target: 85,
    full: 120,
    source: "Event rental",
    notes: "One backup well",
  },
  {
    zone: "D",
    item: "Copper / brass bar tool set",
    qty: 1,
    lean: 90,
    target: 180,
    full: 260,
    source: "Rental",
    notes: "If bar team not fully equipped",
  },
  {
    zone: "E",
    item: "Floor cushion (mud cloth / kuba)",
    qty: 20,
    lean: 18,
    target: 32,
    full: 45,
    source: "Rental / buy",
    notes: "Mix earth tones",
  },
  {
    zone: "E",
    item: "Large jute rug",
    qty: 3,
    lean: 95,
    target: 160,
    full: 230,
    source: "Rental",
    notes: "Layer for depth",
  },
  {
    zone: "E",
    item: "Floor fern grouping",
    qty: 4,
    lean: 70,
    target: 110,
    full: 150,
    source: "Plant rental",
    notes: "Between seating pockets",
  },
  {
    zone: "E",
    item: "Warm string light run",
    qty: 2,
    lean: 85,
    target: 140,
    full: 200,
    source: "Lighting rental",
    notes: "Low height, warm white",
  },
  {
    zone: "F",
    item: "Freestanding moss + vine arch",
    qty: 1,
    lean: 420,
    target: 650,
    full: 950,
    source: "Florist / build",
    notes: "7 ft photo arch",
  },
  {
    zone: "F",
    item: "Round mirror with botanical frame",
    qty: 1,
    lean: 120,
    target: 220,
    full: 350,
    source: "Rental / buy",
    notes: "Lean against wall only",
  },
  {
    zone: "F",
    item: "Photo spotlight + side ferns",
    qty: 1,
    lean: 140,
    target: 240,
    full: 360,
    source: "AV + plant rental",
    notes: "Single-key-light setup",
  },
  {
    zone: "G",
    item: "Slim phoenix / roebelenii palm",
    qty: 6,
    lean: 85,
    target: 130,
    full: 175,
    source: "Plant rental",
    notes: "Sunset terrace line",
  },
  {
    zone: "G",
    item: "High cocktail table + moss skirt",
    qty: 4,
    lean: 45,
    target: 70,
    full: 95,
    source: "Furniture rental",
    notes: "Standing cocktails",
  },
  {
    zone: "G",
    item: "Bar stool with jute pad",
    qty: 8,
    lean: 22,
    target: 35,
    full: 50,
    source: "Furniture rental",
    notes: "Perch seating",
  },
  {
    zone: "All",
    item: "Plant delivery, install, strike",
    qty: 1,
    lean: 650,
    target: 1100,
    full: 1600,
    source: "Plant vendor",
    notes: "Custom quote after walkthrough",
  },
  {
    zone: "All",
    item: "Install labor (4 hr × 3 crew)",
    qty: 1,
    lean: 900,
    target: 1500,
    full: 2200,
    source: "Production",
    notes: "Separate from plant vendor",
  },
  {
    zone: "All",
    item: "Strike labor",
    qty: 1,
    lean: 600,
    target: 950,
    full: 1400,
    source: "Production",
    notes: "Same night or next AM",
  },
];

function formatMoney(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function sumColumn(key) {
  return budgetItems.reduce((total, row) => total + row.qty * row[key], 0);
}

function renderBudget() {
  const tbody = document.querySelector("#budget-table tbody");
  tbody.innerHTML = budgetItems
    .map(
      (row) => `
      <tr>
        <td>${row.zone}</td>
        <td>${row.item}</td>
        <td>${row.qty}</td>
        <td>${formatMoney(row.lean)}</td>
        <td>${formatMoney(row.target)}</td>
        <td>${formatMoney(row.full)}</td>
        <td>${row.source}</td>
        <td>${row.notes}</td>
      </tr>
    `
    )
    .join("");

  const lean = sumColumn("lean");
  const target = sumColumn("target");
  const full = sumColumn("full");

  const contLean = Math.round(lean * 0.1);
  const contTarget = Math.round(target * 0.1);
  const contFull = Math.round(full * 0.1);

  document.getElementById("foot-lean").textContent = formatMoney(lean);
  document.getElementById("foot-target").textContent = formatMoney(target);
  document.getElementById("foot-full").textContent = formatMoney(full);

  document.getElementById("cont-lean").textContent = formatMoney(contLean);
  document.getElementById("cont-target").textContent = formatMoney(contTarget);
  document.getElementById("cont-full").textContent = formatMoney(contFull);

  document.getElementById("grand-lean").textContent = formatMoney(lean + contLean);
  document.getElementById("grand-target").textContent = formatMoney(target + contTarget);
  document.getElementById("grand-full").textContent = formatMoney(full + contFull);

  document.getElementById("total-lean").textContent = formatMoney(lean + contLean);
  document.getElementById("total-target").textContent = formatMoney(target + contTarget);
  document.getElementById("total-full").textContent = formatMoney(full + contFull);
}

renderBudget();
