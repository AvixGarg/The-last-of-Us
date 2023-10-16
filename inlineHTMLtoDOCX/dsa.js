const juice = require('juice');
const fs = require('fs');

// Read the HTML content and CSS from your files
const htmlContent = fs.readFileSync('backend/example.html', 'utf8');
const cssContent = fs.readFileSync('backend/styles.css', 'utf8');

// Convert HTML with external/internal CSS to HTML with inline CSS
juice.juiceResources(htmlContent, { extraCss: cssContent }, function (err, result) {
  if (err) {
    console.error(err);
  } else {
    // Write the result (HTML with inline CSS) to an output file
    const outputPath = "D:/htmldoc/backend/output.html"
    fs.writeFileSync(outputPath, result);
    console.log(`Converted HTML with inline CSS saved to ${outputPath}`);
  }
});
