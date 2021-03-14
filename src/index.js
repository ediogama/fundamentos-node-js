const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json({courses: ["Curso 1", "Curso 2", "Curso 3"]});
})

app.post("/courses", (request, response) => {
    return response.json({courses: ["Curso 1", "Curso 2", "Curso 3", "Curso 4"]});
})

app.put("/couses/:id", (request, response) => {
    return response.json({courses: ["Curso 6", "Curso 2", "Curso 3", "Curso 4"]});
})

app.patch("/couses/:id", (request, response) => {
    return response.json({courses: ["Curso 6", "Curso 7", "Curso 3", "Curso 4"]});
})

app.delete("/couses/:id", (request, response) => {
    return response.json({courses: ["Curso 6", "Curso 2", "Curso 4"]});
})

app.listen(3333)