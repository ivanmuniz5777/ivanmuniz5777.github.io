const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.json([
    {
      name: "Fabricacion",
      description: "La fabricación o elaboración es el método por el cual se crean bloques, herramientas y otros objeto.",
      Crafteos: "Bloques de contruccion, decoracion, armamento, herramientas, alimentacion, pociones, materiales, etc..."
    },
    {
      name: "Alquimia",
      description: "Una de las cosas mas impresionantes de minecraft es u ciencia y en esto su alquimia que proporsiona efectos que puede darte ventaja o el contrario (las posiones no son lo unicos efectos que existen).",
      prescriptions: "ingedientes bases, secundarios y modificadores."
    },
    {
      name: "Circuitos de Redstone",
      description: "Un circuito de redstone es un artilugio que activa o controla mecanismos. Los circuitos pueden actuar en respuesta a la activación de un jugador o entidad/criatura, de forma continua en un bucle, o en respuesta a la actividad de los no jugadores (movimiento de la criatura, caída de objetos, crecimiento de las plantas, etc.).",
      circuits: "circuito de memoria, pistones, pulso, logico, reloj, transmision, diversos, etc..."
    },
    {
      name: "Encantamientos",
      description: "es una mecánica del juego que potencia armaduras, herramientas, armas y libros con uno o más efectos, denominados encantamientos, y que mejoran las habilidades existentes de un objeto o los imbuyen con habilidades o usos adicionales.",
      methods: "libros encantados, combinaciones de yunquesm, mesa de encantamientos, alteracion de encantamientos."
    },
    {
      name: "Granjas",
      description: "Minecraft tiene diversos tipos de mecanicas de las cuales los jugadores han encontado errores y aprovenchandode de estos haciendo tipos de granjas las cuales puedes obtener diversos tipos de items, experiencia, etc...",
      farms: "Granja de experiencia, Granja de mobs, granja de items, granja de mobs en especifico(endermans, creepers, pillagers, villagers, skeletons, etc...) "
    },
  ]
  )
} )

module.exports = router
