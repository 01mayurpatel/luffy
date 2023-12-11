

function myFunction() {
  // Get the text field
  var copyText = '0xbb02647c4ed460d08df6254d69f11217c52ad326';
  
  // Select the text field
  
  // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);

  

  // Alert the copied text
  
}



const xValues = [1, 1, 1, 1, 2, 2, 2, 2, 3, 15, 3, 4, 4, 4];
const yValues = [, 2, 2.2, 2.5, 3, 2.7, 3.5, 4, 3.8, 5, 3.5, 3.6, 2.5, 2, 3, 2.2, , , ,];
const pointRadius = xValues.map((value) => (value === 15 ? 5 : 0));
var count = 0;

// Find the index where y is 5
const yIndex = yValues.indexOf(5);
const xValueAtIndex = xValues[yIndex];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      data: yValues,
      // backgroundColor: "rgba(255,255,255,0.1)", // Color of the shadow
      borderColor: "#a9ece9",
      backgroundColor:"white",
      
      // Color of the line
      borderWidth: 2, 
      pointRadius: pointRadius,
    }, {
      labels: 'Shadowing',
      data: [
        { x: xValueAtIndex, y: 0 },
        { x: xValueAtIndex, y: 0 },
        { x: xValueAtIndex, y: 0 },
        { x: xValueAtIndex, y: 0 },
        { x: xValueAtIndex, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 0 },
      ],
      backgroundColor: (context) => {
        if (!context.chart.chartArea) {
          return;
        }
        const { ctx, data, chartArea: { top, bottom } } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, '#769c9f')
        gradientBg.addColorStop(0.2, '#769c9fa1')
        gradientBg.addColorStop(0.5, '#769c9f66')
        gradientBg.addColorStop(0.9, 'transparent')
        gradientBg.addColorStop(1, 'transparent')
        return gradientBg;
      },
      borderColor: 'red',
      borderWidth: 1,
      fill: 0,
    }]
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          borderWidth: 1,
        },
        ticks: {
          stepSize: 1,
          callback: function (value, index, values) {
            count++
            if (count % 3 !== 0) {
              return "";
            }
            return 'T' + value;
          }
        },
      }],
      yAxes: [{
        gridLines: {
          display: true,
          borderDash: [15, 5],
        },
        ticks: {
          min: 1,
          max: 5,
          stepSize: 1,
          callback: function (value, index, values) {
            return 'P' + value;
          }
        },
      }],
    }
  },
  plugins: [{
    beforeDraw: function (chart) {
      var xValueFivePixel = chart.scales['x-axis-0'].getPixelForValue(xValueAtIndex);
      var ctx = chart.chart.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xValueFivePixel, chart.chartArea.top);
      ctx.strokeStyle = '#a9ece9'; // You can change the color of the line
      ctx.lineWidth = 3; // You can adjust the thickness of the line
      ctx.lineTo(xValueFivePixel, chart.chartArea.bottom);
      ctx.stroke();
      ctx.restore();
    }
  }]
});




setInterval(() => {

    let hourPoint = document.getElementById('hour_point');
    
    
  
    let hh = document.getElementById('hh');
    
    
    let hr_dot = document.querySelector('.hr_dot');
    
   
    let h =hourPoint.innerText;
    
 
  
    // convert 24hr clock to 12hr clock

    
    // add zero before single digit number
    h = (h < 10) ? "0" + h : h;
  
  
    // hours.innerHTML = h + "<br/><span>Hours</span>";
   
    hh.style.strokeDashoffset = 616- ((616*h)/24);
    // console.log(572 - ((572*h)/24));
    
   
    // 12 hrs clock
   
    
    hr_dot.style.transform = `rotate(${h * 15}deg)`;
    
  });
   















  