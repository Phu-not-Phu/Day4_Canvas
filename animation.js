const WIDTH = 1950,
  HEIGHT = 1000;

/**
 * @type {HTMLCanvasElement}
 */

let canvas = document.getElementById("myCanvas");
let pen = canvas.getContext("2d");

pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;
canvas.style.border = "10px solid Black";

function drawCharacter() {
  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(500, 50, 400, 600);
  pen.strokeStyle = "black";
  pen.fillStyle = "#1EB2A6";
  pen.stroke();
  pen.fill();
  pen.closePath();

  function drawFace() {
    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(530, 100, 300, 250);
    pen.strokeStyle = "black";
    pen.fillStyle = "#B1DFD5";
    pen.stroke();
    pen.fill();
    pen.closePath();

    //MOUTH
    pen.beginPath();
    pen.lineWidth = 5;
    pen.arc(660, 250, 20, 0, Math.PI);
    pen.strokeStyle = "black";
    pen.fillStyle = "black";
    pen.stroke();
    pen.closePath();
  }
  drawFace();

  function drawBody() {
    //Hình chữ nhật ngang
    function drawButton1() {
      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(530, 370, 150, 25);
      pen.strokeStyle = "black";
      pen.fillStyle = "#005039";
      pen.stroke();
      pen.fill();
      pen.closePath();
    }
    drawButton1();

    //Hình tròn
    function drawButton2() {
      pen.beginPath();
      pen.lineWidth = 10;
      pen.arc(770, 382, 15, 0, 2 * Math.PI);
      pen.strokeStyle = "black";
      pen.fillStyle = "#01457D";
      pen.stroke();
      pen.fill();
      pen.closePath();

      pen.beginPath();
      pen.lineWidth = 10;
      pen.arc(820, 482, 15, 0, 2 * Math.PI);
      pen.strokeStyle = "black";
      pen.fillStyle = "#75C063";
      pen.stroke();
      pen.fill();
      pen.closePath();

      pen.beginPath();
      pen.lineWidth = 10;
      pen.arc(750, 550, 40, 0, 2 * Math.PI);
      pen.strokeStyle = "black";
      pen.fillStyle = "#F14347";
      pen.stroke();
      pen.fill();
      pen.closePath();
    }
    drawButton2();

    //Hình tam giác
    function drawButton3() {
      pen.beginPath();
      pen.lineWidth = 10;
      pen.strokeStyle = "black";
      pen.fillStyle = "#49C3D3";
      pen.moveTo(750, 470);
      pen.lineTo(710, 420);
      pen.lineTo(670, 470);
      pen.lineTo(755, 470);
      pen.stroke();
      pen.fill();
      pen.closePath();
    }
    drawButton3();

    //Dấu cộng
    function drawButton4() {
      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(555, 435, 20, 75);
      pen.strokeStyle = "black";
      pen.fillStyle = "#FBD64B";
      pen.stroke();
      pen.fill();
      pen.closePath();

      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(530, 463, 75, 20);
      pen.strokeStyle = "black";
      pen.fillStyle = "#FBD64B";
      pen.stroke();
      pen.fill();
      pen.closePath();

      //Bôi đường viền
      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(560, 463, 10, 0.5);
      pen.strokeStyle = "#FBD64B";
      pen.fillStyle = "#FBD64B";
      pen.stroke();
      pen.fill();
      pen.closePath();

      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(560, 483, 10, 0.5);
      pen.strokeStyle = "#FBD64B";
      pen.fillStyle = "#FBD64B";
      pen.stroke();
      pen.fill();
      pen.closePath();
    }
    drawButton4();

    //2 Hình chữ nhật
    function drawButton5() {
      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(530, 550, 63, 25);
      pen.strokeStyle = "black";
      pen.fillStyle = "#0C4671";
      pen.stroke();
      pen.fill();
      pen.closePath();

      pen.beginPath();
      pen.lineWidth = 10;
      pen.rect(610, 550, 63, 25);
      pen.strokeStyle = "black";
      pen.fillStyle = "#0C4671";
      pen.stroke();
      pen.fill();
      pen.closePath();
    }
    drawButton5();
  }
  drawBody();

  function drawNameSide() {
    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(900, 50, 200, 600);
    pen.strokeStyle = "black";
    pen.fillStyle = "#37919C";
    pen.stroke();
    pen.fill();
    pen.closePath();

    drawDot();
    drawName();
  }
  drawNameSide();

  function drawArms() {
    //RIGHT ARM
    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(975, 535, 50, 250);
    pen.strokeStyle = "black";
    pen.fillStyle = "#3A7883";
    pen.stroke();
    pen.fill();
    pen.closePath();

    //LEFT ARM
    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(345, 535, 150, 50);
    pen.strokeStyle = "black";
    pen.fillStyle = "#3A7883";
    pen.stroke();
    pen.fill();
    pen.closePath();
  }
  drawArms();

  function drawLegs() {
    //RIGHT LEG
    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(850, 655, 70, 200);
    pen.strokeStyle = "black";
    pen.fillStyle = "#57807F";
    pen.stroke();
    pen.fill();
    pen.closePath();

    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(830, 815, 80, 40);
    pen.strokeStyle = "black";
    pen.fillStyle = "#57807F";
    pen.stroke();
    pen.fill();
    pen.closePath();

    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(855, 810, 55, 40);
    pen.strokeStyle = "#57807F";
    pen.fillStyle = "#57807F";
    pen.stroke();
    pen.fill();
    pen.closePath();

    //LEFT LEG
    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(650, 655, 70, 200);
    pen.strokeStyle = "black";
    pen.fillStyle = "#57807F";
    pen.stroke();
    pen.fill();
    pen.closePath();

    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(630, 815, 80, 40);
    pen.strokeStyle = "black";
    pen.fillStyle = "#57807F";
    pen.stroke();
    pen.fill();
    pen.closePath();

    pen.beginPath();
    pen.lineWidth = 10;
    pen.rect(655, 810, 55, 40);
    pen.strokeStyle = "#57807F";
    pen.fillStyle = "#57807F";
    pen.stroke();
    pen.fill();
    pen.closePath();
  }
  drawLegs();
}
drawCharacter();

function drawDot() {
  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(965, 100, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1035, 100, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1070, 140, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(930, 140, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1000, 140, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(965, 180, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1035, 180, 3, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();
}

function drawName() {
  drawLetterB();
  drawLetterM();
  drawLetterO();
}

function drawLetterB() {
  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(925, 250, 150, 25);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(965, 275, 40, 0, Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1035, 275, 40, 0, Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1000, 255, 40, 0, Math.PI);
  pen.strokeStyle = "#005567";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(965, 275, 20, 0, Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "#37919C";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1035, 275, 20, 0, Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "#37919C";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 5;
  pen.rect(940, 275, 50, 0);
  pen.strokeStyle = "black";
  pen.fillStyle = "#37919C";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 5;
  pen.rect(1010, 275, 50, 0);
  pen.strokeStyle = "black";
  pen.fillStyle = "#37919C";
  pen.stroke();
  pen.fill();
  pen.closePath();
}

function drawLetterM() {
  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(925, 350, 150, 25);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(925, 440, 150, 25);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.moveTo(1040, 437);
  pen.lineTo(990, 410);
  pen.lineTo(1040, 380);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(1040, 370, 25, 75);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(1020, 360, 50, 10);
  pen.strokeStyle = "#005567";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(1020, 445, 50, 10);
  pen.strokeStyle = "#005567";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.rect(1040, 360, 20, 100);
  pen.strokeStyle = "#005567";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();
}

function drawLetterO() {
  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1000, 560, 70, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "#005567";
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(1000, 560, 30, 0, 2 * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "#37919C";
  pen.stroke();
  pen.fill();
  pen.closePath();
}

function drawEye(size) {
  //LEFT EYE
  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(590, 180, 8, 0, size * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();

  //RIGHT EYE
  pen.beginPath();
  pen.lineWidth = 10;
  pen.arc(740, 180, 8, 0, size * Math.PI);
  pen.strokeStyle = "black";
  pen.fillStyle = "black";
  pen.stroke();
  pen.fill();
  pen.closePath();
}
drawEye(2);

function clear() {
  pen.clearRect(0, 0, WIDTH, HEIGHT);
}

function loop() {
  const FPS = 5;
  let timeloop = 1000 / FPS;
  let size = 0;
  let direction = 1;

    setInterval(() => {
      if (size > 2) {
        direction = -1;
      } else if (size <= 0) {
        direction = 1;
      }
      size += direction * 1;
      clear();
      drawCharacter();
      drawEye(size);
    }, timeloop);
}
loop();
