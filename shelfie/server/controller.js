module.exports = {
    get: (req, res)=>{
        const db = req.app.get('db')

        db.get_inventory().then(products => res.status(200).send(products))
        .catch(err => {res.status(500).send({errorMessage: "Oops! Something went wrong"});
        console.log(err);
        })
    },
    post: (req, res)=> {
        const db = req.app.get('db')
        const { name, price, imageurl} = req.body;

        db.create_product([name, price, imageurl]).then(()=> res.sendStatus(200))
        .catch(err => {res.status(500).send({errorMessage: "Oops! Something went wrong"});
        console.log(err);
        })
    }
} 