const express = require("express");
const app = express();

const cors = require('cors');

app.use(express.json());
let data = [
    {
        body: "deepak",
        amount: "1123",
        id: 1
    },
    {
        body: "goyal",
        amount: "543",
        id: 2
    },
    {
        body: "ine",
        amount: 0,
        id: 3
    },
]

// let idt = data.reduce((a,b) => Math.max(a.id, b.id), -Infinity);


// let data = [
//     {
//       "body": "deepak",
//       "amount": "1123",
//       "id": 1
//     },
//     {
//       "body": "goyal",
//       "amount": "543",
//       "id": 2
//     },
//     {
//       "body": "ine",
//       "amount": 0,
//       "id": 3
//     }
//   ]

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/transactions", (req, res) => {
    res.send(data);
});

app.post("/transactions", (req, res) => {
    // c onsole.log(req.body);
    let idt = 0;
    for (let i = 0; i < data.length; i++) {
        idt = Math.max(idt, data[i].id)
    }

    const newTransaction = {
        body: req.body.body,
        amount: req.body.amount,
        id: idt+1
    }

    data.push(newTransaction);
    res.json(data);
})

app.delete('/transactions/:id', (req, res) => {
    data = data.filter(obj => obj.id !== parseInt(req.params.id));
})

app.get("/transactions/:id", (req, res) => {
    res.json(data.filter(obj => obj.id === parseInt(req.params.id)))
});

// app.post("/transactions", (req,res) => {
//     const newTransaction = {
//         body : "zxcv",
//         amount : "45"
//     }

//     data.push(newTransaction);
//     res.json(data);
// })

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


