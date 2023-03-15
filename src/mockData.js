import {v4 as uuiv4} from "uuid"

const mockData = [
    {
        id: uuiv4(),
        title: "📋 Por Hacer",
        tasks:[
            {
                id: uuiv4(),
                title: "Estudiar JS"
            },
            {
                id: uuiv4(),
                title: "Estudiar CSS"
            },
            {
                id: uuiv4(),
                title: "Estudiar HTML"
            }
        ]
    },
    {
        id: uuiv4(),
        title: "⏳ En Progreso",
        tasks:[
            {
                id: uuiv4(),
                title: "Estudiar Phaser3"
            },
            {
                id: uuiv4(),
                title: "Estudiar Godot"
            },
        ]
    },
    {
        id: uuiv4(),
        title: "✔ Completado",
        tasks:[
            {
                id: uuiv4(),
                title: "Estudiar Wordpress"
            },
        ]
    }
]

export default mockData;