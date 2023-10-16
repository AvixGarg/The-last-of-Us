const fs = require('fs');
const htmlFilePath = 'backend/example.html';
const cheerio = require('cheerio');

// Load your HTML content
const htmlContent = fs.readFileSync('backend/example.html', 'utf8');

// Parse HTML with Cheerio
const $ = cheerio.load(htmlContent);

// Extract style elements
const styleTags = [];

$('style').each((index, element) => {
  styleTags.push($(element).html());
});

// Output the contents of the style tags
const extractedpath = "D:/htmldoc/backend/styles.css"  // //
styleTags.forEach((styleContent, index) => {
//   console.log(Style tag #${index + 1}:);
  fs.writeFileSync(extractedpath,styleContent);

  console.log(styleContent);
  console.log('\n');
});
