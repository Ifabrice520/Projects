const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedTab = btn.getAttribute("data-tab");


    tabButtons.forEach((b) => {
      b.classList.remove("bg-gradient-to-r", "from-blue-600", "to-purple-400", "text-white", "shadow");
      b.classList.add("bg-gray-100", "text-gray-500");
    });

    btn.classList.remove("bg-gray-100", "text-gray-500");
    btn.classList.add("bg-gradient-to-r", "from-blue-600", "to-purple-400", "text-white", "shadow");

    
    tabContents.forEach((section) => {
      section.classList.add("hidden");
    });

    document.getElementById(selectedTab).classList.remove("hidden");
  });
});


const unitOptions = {
  length: [
    { value: "km", label: "Kilometers (km)" },
    { value: "mi", label: "Miles (mi)" },
    { value: "m", label: "Meters (m)" },
    { value: "ft", label: "Feet (ft)" },
    { value: "cm", label: "Centimeters (cm)" },
    { value: "in", label: "Inches (in)" }
  ],
  temperature: [
    { value: "c", label: "Celsius (°C)" },
    { value: "f", label: "Fahrenheit (°F)" },
    { value: "k", label: "Kelvin (K)" }
  ],
  weight: [
    { value: "kg", label: "Kilograms (kg)" },
    { value: "g", label: "Grams (g)" },
    { value: "lb", label: "Pounds (lb)" },
    { value: "oz", label: "Ounces (oz)" }
  ],
  time: [
    { value: "s", label: "Seconds (s)" },
    { value: "min", label: "Minutes (min)" },
    { value: "hr", label: "Hours (hr)" },
    { value: "day", label: "Days (day)" }
  ]
};

const tabs = document.querySelectorAll('.tab-btn');
const initialVal = document.getElementById('initialVal');
const convertedVal = document.getElementById('convertedVal');
const input = document.getElementById('input');
const output = document.getElementById('output');

let currentTab = 'length';


function populateUnits(tab) {
  initialVal.innerHTML = '';
  convertedVal.innerHTML = '';
  unitOptions[tab].forEach(opt => {
    initialVal.innerHTML += `<option value="${opt.value}">${opt.label}</option>`;
    convertedVal.innerHTML += `<option value="${opt.value}">${opt.label}</option>`;
  });

  if (tab === 'length') {
    convertedVal.value = 'mi'; 
  } else {
    convertedVal.selectedIndex = 0;
  }
}


tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    tabs.forEach(t => t.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-purple-400', 'text-white'));
    tab.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-purple-400', 'text-white');
    currentTab = tab.getAttribute('data-tab');
    populateUnits(currentTab);
    output.value = '';
    input.value = '';
  });
});


function convertLength(val, from, to) {
  const factors = {
    km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yd: 0.9144, ft: 0.3048, in: 0.0254
  };
  if (!(from in factors) || !(to in factors)) return '';
  return (parseFloat(val) * factors[from] / factors[to]).toFixed(4);
}


function convertTemperature(val, from, to) {
  val = parseFloat(val);
  if (from === to) return val;
  if (from === 'c') return to === 'f' ? (val * 9/5 + 32).toFixed(2) : (val + 273.15).toFixed(2);
  if (from === 'f') return to === 'c' ? ((val - 32) * 5/9).toFixed(2) : (((val - 32) * 5/9) + 273.15).toFixed(2);
  if (from === 'k') return to === 'c' ? (val - 273.15).toFixed(2) : ((val - 273.15) * 9/5 + 32).toFixed(2);
  return '';
}


function convertWeight(val, from, to) {
  const factors = {
    kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495
  };
  if (!(from in factors) || !(to in factors)) return '';
  return (parseFloat(val) * factors[from] / factors[to]).toFixed(4);
}


function convertTime(val, from, to) {
  const factors = {
    s: 1, min: 60, hr: 3600, day: 86400
  };
  if (!(from in factors) || !(to in factors)) return '';
  return (parseFloat(val) * factors[from] / factors[to]).toFixed(4);
}


input.addEventListener('input', function() {
  let val = input.value;
  let from = initialVal.value;
  let to = convertedVal.value;
  let result = '';
  if (!val || isNaN(val)) {
    output.value = '';
    return;
  }
  if (currentTab === 'length') result = convertLength(val, from, to);
  if (currentTab === 'temperature') result = convertTemperature(val, from, to);
  if (currentTab === 'weight') result = convertWeight(val, from, to);
  if (currentTab === 'time') result = convertTime(val, from, to);
  output.value = result;
});


populateUnits(currentTab);


  const fromSelect = document.getElementById('initialVal');
  const toSelect = document.getElementById('convertedVal');
  const inputField = document.getElementById('input');
  const outputField = document.getElementById('output');
  const shiftBtn = document.querySelector('.fa-exchange');

  shiftBtn.addEventListener('click', () => {
    
    const tempUnit = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = tempUnit;

    
    const tempValue = inputField.value;
    inputField.value = outputField.value;
    outputField.value = tempValue;
  });

