// Get references to elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

// Store user input
let currentInput = "";

// Loop through buttons and add click events
buttons.forEach(button => {
  const value = button.dataset.value;

  // If button has a value (0-9, +, -, *, /, .)
  if (value) {
    button.addEventListener('click', () => {
      currentInput += value;
      display.value = currentInput;
    });
  }
});

// Clear the display
clearBtn.addEventListener('click', () => {
  currentInput = "";
  display.value = "";
});

// Calculate the result
equalsBtn.addEventListener('click', () => {
  try {
    const result = eval(currentInput); // Note: eval is okay here for basic usage
    display.value = result;
    currentInput = result.toString(); // Update input with result for next operations
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});
// Keyboard support
document.addEventListener("keydown", function(event) {
  const key = event.key;

  // Allow numbers, operators, decimal
  if ((key >= "0" && key <= "9") || "+-*/.".includes(key)) {
    currentInput += key;
    display.value = currentInput;
  }

  // Enter or = to calculate
  else if (key === "Enter" || key === "=") {
    try {
      const result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
  }

  // C or c to clear
  else if (key.toLowerCase() === "c") {
    currentInput = "";
    display.value = "";
  }

  // Backspace to delete last character
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  // Prevent default form actions (optional)
  event.preventDefault();
});
const themeToggle = document.getElementById("theme-toggle");

// Switch between light and dark theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Optional: Change emoji/icon
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Switch to Light";
  } else {
    themeToggle.textContent = "🌙 Switch to Dark";
  }
});

