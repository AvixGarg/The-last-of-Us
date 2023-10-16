const fs = require("fs");
const HTMLtoDOCX = require("html-to-docx");
const filePath = "./example.docx";
const htmlString = fs.readFileSync('D:/htmldoc/backend/output.html',  'utf8');

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log("Docx file creation failed");
        console.log(error);
      return;
    }
    console.log("Docx file created successfully");
});
})();
