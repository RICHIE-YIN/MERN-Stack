const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.listen( port, () => console.log(`Listening on port: ${port}`) );

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phonenumber: faker.phone.number(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        userid: faker.datatype.uuid()
    };
    return newUser;
};


const createCompany = () => {
    const newCompany = {
        userid: faker.datatype.uuid(),
        name: faker.company.name(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
};

const newUser = createUser();
console.log(newUser);

const newCompany = createCompany();
console.log(newCompany);

app.get("/api/users/new", (req, res) => {
    res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
        res.json(newCompany);
    });

app.get("/api/user/company", (req, res) => {
    res.json({newCompany, newUser})
    });