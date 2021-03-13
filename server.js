const express = require('express');
const app = express();

const data = [
    {_id: 1, name: "Alex", body: "awe0-wqwer234"},
    {_id: 2, name: "Dave", body: "awe0-23e3r2df"},
    {_id: 3, name: "Mat", body: "awe0-23442d2"},
    {_id: 4, name: "Cybyl", body: "awe0-sddqewd22"},
]


app.get('/data', (req,res) => {
    res.send(JSON.stringify(data))
})

app.listen(8089, () => {
    console.log("Server started !")
})