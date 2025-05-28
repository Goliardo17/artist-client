'use client'
import '@xyflow/react/dist/style.css';

import { ReactFlowProvider, ReactFlow, Background, BackgroundVariant, type Node } from "@xyflow/react"

export const CanvasViewer = () => {
  const nodes: Node<{ name: string }>[] = [
    {
      id: "1",
      data: {
        name: "Ivan",
      },
      position: {
        x: 150,
        y: 150,
      }
    },
    {
      id: "2",
      data: {
        name: "Vladimir",
      },
      position: {
        x: 600,
        y: 300,
      }
    },
  ]
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={[]}
        className="h-full"
        fitView
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={12}
          size={1}
        />
      </ReactFlow>
    </ReactFlowProvider>
  )
}
