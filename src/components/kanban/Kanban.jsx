import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import {Card} from '../card/Card'

import mockData from "../../mockData"
import { useState } from "react"

export const Kanban = () => {

  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    if(!result.destination) return 
    const {source, destination} = result

    if(source.droppableId !== destination.droppableId){
      const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
      
      const destinationColIndex = data.findIndex(e => e === destination.droppableId)
      
      const sourceCol = data [sourceColIndex]
      
      const destinationCol = data [destinationColIndex]

      const sourceTask = [...sourceCol.tasks]

      const destinationTask = [...destinationCol.tasks]

    }

  }

  return (
    <div>Kanban</div>
  )
}
