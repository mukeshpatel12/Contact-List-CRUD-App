const express = require('express');
const sequelize = require('./db/database')
const Contact = require('./models/contact')
const app = express();
const port = process.env.PORT || 7000;
var cors = require('cors');
app.use(cors());
app.use(express.json())
// app.use(express.json({limit: '100mb'}));
// app.use(express.urlencoded({limit: '100mb'}));
sequelize.sync().then(()=>console.log("db is ready"))


app.post('/contact',async(req,res)=>{
    await Contact.create(req.body);
    console.log("Devendra")
    res.send("contact is inserted")
})

app.get('/contact',async(req,res)=>{
    const contacts = await Contact.findAll();
    res.send(contacts)
})

app.get('/contact/:id',async(req,res)=>{
    const reqId = req.params.id;
    const contact = await Contact.findOne({where:{id:reqId}});
    res.send(contact)
})

app.put('/contact/:id',async(req,res)=>{
    const reqId = req.params.id;
    const contact = await Contact.findOne({where:{id:reqId}});
    contact.name=req.body.name;
    contact.lastname=req.body.lastname;
    contact.telephone=req.body.telephone;
    contact.email=req.body.email;
    contact.age=req.body.age;
    contact.website=req.body.website;
    contact.tags=req.body.tags;
    if (req.body.picture) {
        contact.picture=req.body.picture;
    }
    await contact.save()
    res.send("updated")
})

app.delete('/contact/:id',async(req,res)=>{
    const reqId = req.params.id;
    const contact = await Contact.destroy({where:{id:reqId}});
    res.send("remove")
})


app.listen(port,()=>{
    console.log(`connection is live at port ${port}`)
})

