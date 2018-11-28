let ocrText = "Optimal character recognition is the technology used to convert digital images to editable documents. It is capable of converting books containing thousands of pages into a pdf or word documents. When physical documents are scanned using a scanner, it does not provide you with the ability of editing and adding content to it. The scanner only provides an image of the documents containing several lines of black and white dots which is called a raster image. OCR softwares are used to convert these raster images digitally by singling out these black and white dots into letters, then into words and then into lines of text. During the processing of singling out text characters, these characters are converted into ASCII code for computers to understand and thereby making it easier to recreate the document into a digital format."

function ocrBootIn()
{
  var gridContainer = document.getElementById("ImageGrid");
  var carContainer = document.getElementById("selfCarImg");
  var ocrContainer = document.getElementById("ocrImg");
  var tbdContainer = document.getElementById("tbd");
  var ocrInfo = document.getElementById("ocrTxt");

  ocrInfo.innerHTML = ocrText;
  gridContainer.style.gridTemplateRows = '"auto auto auto"';
  gridContainer.style.gridTemplateAreas = '". oImage ." "oText oText oText" "sImage tImage ."';

  ocrContainer.style.gridArea = "oImage";
  carContainer.style.gridArea = "sImage";
  tbdContainer.style.gridArea = "tImage";
  ocrInfo.style.gridArea = "oText";
}

function bootOut()
{
  var gridContainer = document.getElementById("ImageGrid");
  var carContainer = document.getElementById("selfCarImg");
  var ocrContainer = document.getElementById("ocrImg");
  var tbdContainer = document.getElementById("tbd");
  var ocrInfo = document.getElementById("ocrTxt")
  ocrInfo.innerHTML = "";
  gridContainer.style.gridTemplateColumns = '"30% 30% 30%"';
  gridContainer.style.gridTemplateRows = '"auto"';
  gridContainer.style.gridTemplateAreas = '"car ocr tbda"';
  carContainer.style.gridArea = "car";
  ocrContainer.style.gridArea = "ocr";
  tbdContainer.style.gridArea = "tbda";
}
