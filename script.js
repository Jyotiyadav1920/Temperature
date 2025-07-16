const tempInput = document.getElementById('tempInput');
const unitSelect = document.getElementById('unitSelect');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Animate container on load
anime({
  targets: '.container',
  scale: [0.9, 1],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1000
});

convertBtn.addEventListener('click', function() {
  const temp = parseFloat(tempInput.value);
  const unit = unitSelect.value;

  anime({
    targets: convertBtn,
    scale: [1, 0.95, 1],
    duration: 300,
    easing: 'easeInOutQuad'
  });

  if (isNaN(temp)) {
    resultDiv.innerText = "❌ Please enter a valid number.";
    animateResult();
    return;
  }

  let converted = '';

  if (unit === 'celsius') {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    converted = `${temp}°C = ${f.toFixed(2)}°F, ${k.toFixed(2)}K`;
  } else if (unit === 'fahrenheit') {
    const c = (temp - 32) * 5/9;
    const k = c + 273.15;
    converted = `${temp}°F = ${c.toFixed(2)}°C, ${k.toFixed(2)}K`;
  } else if (unit === 'kelvin') {
    const c = temp - 273.15;
    const f = (c * 9/5) + 32;
    converted = `${temp}K = ${c.toFixed(2)}°C, ${f.toFixed(2)}°F`;
  }

  resultDiv.innerText = converted;
  animateResult();
});

function animateResult() {
  anime({
    targets: '#result',
    opacity: [0, 1],
    translateY: [-20, 0],
    scale: [0.8, 1],
    easing: 'easeOutElastic(1, .8)',
    duration: 800
  });
}
