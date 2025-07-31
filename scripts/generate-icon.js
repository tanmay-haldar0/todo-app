const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a 1024x1024 canvas for the app icon
const canvas = createCanvas(1024, 1024);
const ctx = canvas.getContext('2d');

// Primary color background (light blue)
const primaryColor = '#3b82f6';

// Fill the background with primary color
ctx.fillStyle = primaryColor;
ctx.fillRect(0, 0, 1024, 1024);

// Create a circular background for the icon
ctx.beginPath();
ctx.arc(512, 512, 400, 0, 2 * Math.PI);
ctx.fillStyle = '#ffffff';
ctx.fill();

// Draw a simple document icon (white on blue background)
ctx.fillStyle = primaryColor;
ctx.font = 'bold 300px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('📝', 512, 512);

// Save the icon
const outputPath = path.join(__dirname, '../assets/images/icon.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log('App icon generated successfully!'); 