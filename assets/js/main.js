const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = "200";
canvasOOP.width = "300";

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textcolor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// Función para generar un color RGB aleatorio
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Dibuja el primer círculo en el lienzo "Objeto 2D" con color fijo
let miCirculo = new Circle(
  canvasOOP.width / 2,
  canvasOOP.height / 2,
  50,
  "rgb(231, 9, 139)",      // borde estático
  "Tec",
  "rgb(66, 135, 245)",    // fondo estático
  "rgb(0, 0, 0)",
);
miCirculo.draw(ctx);

// Círculo aleatorio en "Objeto con Random"
// El radio no debe ser mayor que la mitad de la dimensión más pequeña del canvas
const minRadius = 30;
const maxRadius = Math.min(canvasRandom.width, canvasRandom.height) / 2;
let randomRadius =
  Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;

// calcular posición garantizando que el círculo completo quede dentro del lienzo
let randomX =
  Math.random() * (canvasRandom.width - randomRadius * 2) + randomRadius;
let randomY =
  Math.random() * (canvasRandom.height - randomRadius * 2) + randomRadius;

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  getRandomColor(),
  "Tec",
  getRandomColor(),
  "rgb(0, 0, 0)",
);
miCirculoRandom.draw(ctxRandom);

// Generar múltiples círculos con posiciones aleatorias en "Múltiples objetos"
let arrayCircle = [];

for (let i = 0; i < 10; i++) {
  let randomRadius = Math.floor(Math.random() * 10 + 20); // Establecer un radio aleatorio
  let randomX =
    Math.random() * (canvasMultiple.width - randomRadius * 2) + randomRadius;
  let randomY =
    Math.random() * (canvasMultiple.height - randomRadius * 2) + randomRadius;

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    getRandomColor(),
    i + 1,
    getRandomColor(),
    "rgb(0, 0, 0)",
  );

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}