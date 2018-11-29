let ocrText = "Optimal character recognition is the technology used to convert digital images to editable documents. It is capable of converting books containing thousands of pages into a pdf or word documents. When physical documents are scanned using a scanner, it does not provide you with the ability of editing and adding content to it. The scanner only provides an image of the documents containing several lines of black and white dots which is called a raster image. OCR softwares are used to convert these raster images digitally by singling out these black and white dots into letters, then into words and then into lines of text. During the processing of singling out text characters, these characters are converted into ASCII code for computers to understand and thereby making it easier to recreate the document into a digital format."

let sText = "The first automated car was developed in 1977 by Japan’s Tsukuba Mechanical Engineering Laboratory. The technology behind automated cars involves several sensors such as radars, computer vision, lidar, sonar, GPS, odometry and inertial measurement units. These sensors produce data when they produce signals. These data are processed by artificial intelligence systems incorporated into a vehicle to predict its surroundings. Based on these predictions these cars operate thereby trying to avoid obstacles and follow lanes. Since these are just predictions based on data, there are controversies surrounding this concept whether to trust it with human life. However, in today’s world with the massive amounts of data available at disposal, these predictions are becoming more and more accurate.";

function ocrBootIn() {
  var gridContainer = document.getElementById("ImageGrid");
  var carContainer = document.getElementById("selfCarImg");
  var ocrContainer = document.getElementById("ocrImg");
  var tbdContainer = document.getElementById("tbd");
  var ocrInfo = document.getElementById("ocrTxt");
  var sInfo = document.getElementById("selfCarTxt");

  sInfo.innerHTML = "";
  sInfo.style.backgroundColor = "#FF530D";

  ocrInfo.innerHTML = ocrText;
  ocrInfo.style.padding = "30px 100px";


  gridContainer.style.gridTemplateRows = '"auto auto"';
  gridContainer.style.gridTemplateAreas = '"sImage oImage tImage" "oText oText oText"';

  ocrContainer.style.gridArea = "oImage";
  carContainer.style.gridArea = "sImage";
  tbdContainer.style.gridArea = "tImage";
  ocrInfo.style.gridArea = "oText";
  ocrInfo.style.color = "white";
  ocrInfo.style.backgroundColor = "black";
}

function carBootIn() {
  var gridContainer = document.getElementById("ImageGrid");
  var carContainer = document.getElementById("selfCarImg");
  var ocrContainer = document.getElementById("ocrImg");
  var tbdContainer = document.getElementById("tbd");
  var sInfo = document.getElementById("selfCarTxt");
  var ocrInfo = document.getElementById("ocrTxt");

  ocrInfo.innerHTML = "";
  ocrInfo.style.backgroundColor = "#FF530D";

  sInfo.innerHTML = sText;
  sInfo.style.padding = "30px 100px";

  carContainer.style.paddingLeft = "5%";
  ocrContainer.style.paddingLeft = "5%";

  gridContainer.style.gridTemplateRows = '"auto auto"';
  gridContainer.style.gridTemplateAreas = '"sImage oImage tImage" "sText sText sText"';

  ocrContainer.style.gridArea = "oImage";
  carContainer.style.gridArea = "sImage";
  tbdContainer.style.gridArea = "tImage";
  sInfo.style.gridArea = "sText";
  sInfo.style.color = "white";
  sInfo.style.backgroundColor = "black";
  sInfo.style.paddingLeft = "20px";
}

function bootOut() {
  var gridContainer = document.getElementById("ImageGrid");
  var carContainer = document.getElementById("selfCarImg");
  var ocrContainer = document.getElementById("ocrImg");
  var tbdContainer = document.getElementById("tbd");
  var ocrInfo = document.getElementById("ocrTxt");
  var sInfo = document.getElementById("selfCarTxt");
  ocrInfo.innerHTML = "";
  sInfo.innerHTML = "";
  ocrInfo.style.backgroundColor = "#FF530D";
  sInfo.style.backgroundColor = "#FF530D";
  //gridContainer.style.gridTemplateColumns = '"33% 33% 33%"';
  gridContainer.style.gridTemplateRows = '"auto auto"';
  gridContainer.style.gridTemplateAreas = '"car ocr tbda" "carText ocrText ."';
  carContainer.style.gridArea = "car";
  ocrContainer.style.gridArea = "ocr";
  tbdContainer.style.gridArea = "tbda";
  ocrInfo.style.gridArea = "ocrText";
  sInfo.style.gridArea = "carText";
}
