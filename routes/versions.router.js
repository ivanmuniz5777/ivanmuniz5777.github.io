const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.json([
    {
      version:"Minecraft",
      description: "Un videojuego de construcción en donde puedes explorar un mundo lleno de posibilidades infinitas.",
      launch: "17/05/2009",
      type: "SanBox",
      Author: "Mojang",

    },
    {
      version:"Minecraft Dungeons",
      description: "Un videojuego de acción y aventura en donde te enfrentas a maldeanos y liberas la Superficie de su dominio.",
      launch: "23/09/2021",
      type: "adventure, action",
      Author: "Mojang",
    },
    {
      name:"Minecraft Legends",
      description: "Un videojuego que tratará acerca de una leyenda sobre un héroe que salvó a la Superficie de una invasión.",
      launch: "Comming soon",
      type: "adventure, action, OpenWorld, Sanbox",
      Author: "Mojang",
    },
    {
      name:"Minecraft Dungeons Arcade",
      description: "Un videojuego para arcades basado en su versión original.",
      launch: "26/05/2020",
      type: "adventure, action",
      Author: "Mojang",
    },
    {
      name:"Minecraft: Story Mode 2",
      description: "Un videojuego que continuaba la ruta de su predecesor.",
      launch: "11/07/2017",
      type: "narrative",
      Author: "Mojang",
    },
    {
      name:"Minecraft: Story Mode",
      description: "Un videojuego de aventura gráfica que contaba historias.",
      launch: "13/10/2015",
      type: "narrative",
      Author: "Mojang",
    },

]
  )
})

module.exports = router
