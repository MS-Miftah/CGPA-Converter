let btn = document.querySelector("button");
let contents = document.querySelector(".contents");
let results = document.querySelector(".results");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  formValidation();

  contents.style.display = "none";
  results.style.visibility = "visible";

  marks();
  points();
  grades();
  totalCGPA();
  totalGrade();
});

// marks
let inpMarks = document.querySelectorAll(
  "#sub1, #sub2, #sub3, #sub4, #sub5, #sub6"
);
let showMarks = document.querySelectorAll(".mark");

function marks() {
  inpMarks.forEach((input, index) => {
    showMarks[index].textContent = input.value;
  });
}

// points
function points() {
  points200();
  points150();
  points100();
}
// 200
let inpMarks200 = document.querySelectorAll("#sub3, #sub4, #sub6");
let showPoints200 = document.querySelectorAll(".point3, .point4,.point6");

function points200() {
  inpMarks200.forEach((input, index) => {
    showPoints200[index].textContent =
      input.value / 40 <= 4 ? (input.value / 40).toFixed(2) : "4.00";
  });
}

// 150
let inpMarks150 = document.querySelectorAll("#sub1, #sub2");
let showPoints150 = document.querySelectorAll(".point1, .point2");

function points150() {
  inpMarks150.forEach((input, index) => {
    showPoints150[index].textContent =
      input.value / 30 <= 4 ? (input.value / 30).toFixed(2) : "4.00";
  });
}

// 100
let inpMarks100 = document.querySelectorAll("#sub5");
let showPoints100 = document.querySelectorAll(".point5");

function points100() {
  inpMarks100.forEach((input, index) => {
    showPoints100[index].textContent =
      input.value / 20 <= 4 ? (input.value / 20).toFixed(2) : "4.00";
  });
}

// grades
function grades() {
  grades200();
  grades150();
  grades100();
}

// 200
let showGrades200 = document.querySelectorAll(".grade3, .grade4, .grade6");

function grades200() {
  inpMarks200.forEach((input, index) => {
    let grade = input.value / 40;
    showGrades200[index].textContent =
      grade >= 4
        ? "A+"
        : grade >= 3.75
        ? "A"
        : grade >= 3.5
        ? "A-"
        : grade >= 3.25
        ? "B+"
        : grade >= 3.0
        ? "B"
        : "F";
  });
}

// 150
let showGrades150 = document.querySelectorAll(".grade1, .grade2");

function grades150() {
  inpMarks150.forEach((input, index) => {
    let grade = input.value / 30;
    showGrades150[index].textContent =
      grade >= 4
        ? "A+"
        : grade >= 3.75
        ? "A"
        : grade >= 3.5
        ? "A-"
        : grade >= 3.25
        ? "B+"
        : grade >= 3.0
        ? "B"
        : "F";
  });
}

// 100
let showGrades100 = document.querySelectorAll(".grade5");

function grades100() {
  inpMarks100.forEach((input, index) => {
    let grade = input.value / 20;
    showGrades100[index].textContent =
      grade >= 4
        ? "A+"
        : grade >= 3.75
        ? "A"
        : grade >= 3.5
        ? "A-"
        : grade >= 3.25
        ? "B+"
        : grade >= 3.0
        ? "B"
        : "F";
  });
}

// total CGPA
let allPoints = document.querySelectorAll(
  ".point1, .point2, .point3, .point4, .point5, .point6"
);
let cgpa = document.querySelector(".cgpa");

function totalCGPA() {
  let sum = 0;
  allPoints.forEach((point) => {
    sum += Number(point.textContent);
  });
  cgpa.textContent = (sum / 6).toFixed(2);
}

// total Grade
let letGrade = document.querySelector(".letter");

function totalGrade() {
  let grade = cgpa.textContent;
  letGrade.textContent =
    grade >= 4
      ? "A+"
      : grade >= 3.75
      ? "A"
      : grade >= 3.5
      ? "A-"
      : grade >= 3.25
      ? "B+"
      : grade >= 3.0
      ? "B"
      : "F";
}

// form validation
let note = document.querySelector("#note");

function formValidation(e) {
  note.textContent = "";

  inpMarks.forEach((input) => {
    if (!input.checkValidity()) {
      note.textContent = input.validationMessage;
      e.preventDefault();
    }
  });
}
