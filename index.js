//on inclut express
const express = require('express')
// notre application est une express
const app = express()

//on définit le contenu qui va s'afficher lorsque que l'on va arriver sur l'url par défaut ici un "Hello World!"
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//on lance notre serveur
app.listen(8000, () => {
    console.log('Exemple app listening on port 8000!')
})