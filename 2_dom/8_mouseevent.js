const clearBtn = document.querySelector(".clear-tasks");

const card = document.querySelector(".card");

const heading = document.querySelector("h5");

// click
// clearBtn.addEventListener('click',runEvent)
// double click

// clearBtn.addEventListener('dblclick',runEvent)

// clearBtn.addEventListener('mousedown',runEvent)
// clearBtn.addEventListener('mouseup',runEvent)
// clearBtn.addEventListener('mouseenter',runEvent)
// clearBtn.addEventListener('mouseleave',runEvent)
// clearBtn.addEventListener("mouseover", runEvent);
// clearBtn.addEventListener("mouseout", runEvent);

card.addEventListener("mousemove", runEvent);
card.addEventListener("touchmove", runEvent);

// Event Handler

function runEvent(e) {
  e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  heading.textContent = `Mouse X: ${e.offsetX} Mouse Y:${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}

console.log(clearBtn);
