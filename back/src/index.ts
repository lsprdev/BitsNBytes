

import express from 'express';


const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (res, req) =>{
    req.send("Hello");
})

app.listen(PORT, () => {
    console.log(PORT)
});