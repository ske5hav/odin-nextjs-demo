import express from 'express';
import path from "node:path";
const app = express();

app.get("/", (req, res) => {
    res.sendFile(
        path.join(process.cwd(),"index.html")
    )
});

app.get("/about",(req,res) =>{
    res.sendFile(path.join(process.cwd(),"about.html"))
})

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(process.cwd(), "contact-me.html"));
});


app.use((req, res) => {
    res.status(404).sendFile(
        path.join(process.cwd(), "404.html")
    );
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});