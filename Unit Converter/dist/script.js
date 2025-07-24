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



const swapBtn = document.getElementById("swap");

swapBtn.addEventListener("click", () => {
  const temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
  convert(); 
});
