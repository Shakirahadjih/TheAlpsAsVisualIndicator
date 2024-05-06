// Define the data for each circle
let circlesData = [
    { label: 'f', percentage: 10 },
    { label: 'm', percentage: 24 },
    { label: 'ff', percentage: 66 }
  ];
  
  // Track the number of circles to draw
  let circlesToDraw = 0;
  
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); // Set background to white
  
    describe(
      'Circles represent different data. One circle is drawn at a finger.'
    );
  }
  
  function draw() {
    background(255); // Clear the canvas on each frame
    stroke(0); // Set stroke color to black
  
    // Check if there are any touches and circles to draw
    if (touches.length > 0 && circlesToDraw > 0) {
      // Sort circles data by percentage in descending order
      circlesData.sort((a, b) => b.percentage - a.percentage);
  
      // Draw circles from big to small
      for (let i = 0; i < circlesToDraw && i < circlesData.length; i++) {
        let circleData = circlesData[i];
        let radius = map(circleData.percentage, 0, 100, 80, 200); // Map percentage to radius
        noFill(); // Set fill to none
        if (touches[i]) { // Check if touch exists
          let touchX = touches[i].x;
          let touchY = touches[i].y ;
          circle(touchX, touchY, radius);
          text(circleData.label, touchX - 10, touchY + 5); // Display label
          
          // Draw lines connecting circles
          if (i > 0) {
            let prevTouchX = touches[i - 1].x;
            let prevTouchY = touches[i - 1].y;
            line(prevTouchX, prevTouchY, touchX, touchY);
          }
        }
      }
    }
  }
  
  // Detect touch events to update the number of circles to draw
  function touchStarted() {
    if (touches.length > 0 && circlesToDraw < touches.length) {
      circlesToDraw = touches.length;
    }
  }