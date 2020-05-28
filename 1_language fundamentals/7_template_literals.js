const name = "John";

const age = 40;

const job = "Web Dev";

const city = "Miami";

// ES6 Template string(literal)

html = `
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Job:${job}</li>
<li>City:${city}</li>
<li>${2 + 2}</li>
<li>${age > 30 ? "Over 30" : "Under 30"}</li>
</ul>
`;

document.body.innerHTML = html;
