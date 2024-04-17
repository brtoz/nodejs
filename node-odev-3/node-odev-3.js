function circleAreaCalc(r) {
    const area = Math.PI * r * r;
    console.log(`Dairenin alanı: ${area.toFixed(2)}`);
  }
  
  function circleCircumference(r) {
    const circumference = 2 * Math.PI * r;
    console.log(`Dairenin çevresi: ${circumference.toFixed(2)}`);
  }
  
  module.exports = {
    circleAreaCalc,
    circleCircumference
  };