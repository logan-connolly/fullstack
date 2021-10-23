const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());
morgan.token("payload", function (req, res) {
  const payload = JSON.stringify(req.body);
  return payload === "{}" ? "" : payload;
});
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      tokens.payload(req, res),
    ].join(" ");
  })
);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateId = () => {
  const highestPossibleId = 1000000;
  return Math.floor(Math.random() * highestPossibleId);
};

app.get("/info", (request, response) => {
  const markup =
    `<p>Phonebook has info for ${persons.length} people</p>` +
    `<p>${new Date()}</p>`;
  response.send(markup);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((p) => p.id === +id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((p) => p.id !== +id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: "Missing name and/or number" });
  }

  const personFound = persons.find((p) => p.name === body.name);
  if (personFound) {
    return response.status(400).json({ error: `'${personFound.name}' exists` });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);
  response.status(201).json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
