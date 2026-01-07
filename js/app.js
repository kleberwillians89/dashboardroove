const DATA = {
  "2025-12": {
    tudo: {
      views: [0,20,40,120,500,1100,1600,900,300,80],
      totals: { views: 5610, organic: 3751, paid: 1859 },
      reach: 5000,
      interactions: 221,
      delta: { views: "+33,3%", reach: "+620,1%", interactions: "-22,2%" }
    }
  }
};

let currentMonth = "2025-12";
let currentView = "tudo";

document.getElementById("monthSelect").onchange = e => {
  currentMonth = e.target.value;
  render();
};

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".tabs .active").classList.remove("active");
    btn.classList.add("active");
    currentView = btn.dataset.view;
    render();
  };
});

function render() {
  const d = DATA[currentMonth][currentView];

  document.getElementById("kpiViews").innerText = d.totals.views.toLocaleString("pt-BR");
  document.getElementById("kpiReach").innerText = d.reach.toLocaleString("pt-BR");
  document.getElementById("kpiInteractions").innerText = d.interactions;

  document.getElementById("kpiViewsDelta").innerText = d.delta.views;
  document.getElementById("kpiReachDelta").innerText = d.delta.reach;
  document.getElementById("kpiInteractionsDelta").innerText = d.delta.interactions;

  document.getElementById("sideTotal").innerText = d.totals.views.toLocaleString("pt-BR");
  document.getElementById("sideOrganic").innerText = d.totals.organic.toLocaleString("pt-BR");
  document.getElementById("sidePaid").innerText = d.totals.paid.toLocaleString("pt-BR");

  renderViewsChart(d.views);
}

render();
