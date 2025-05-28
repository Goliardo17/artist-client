import { ToolPanel } from "./tool-panel";
import { CanvasViewer } from "./canvas-viewer";

export const Canvas = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <CanvasViewer />
      {/* <ToolPanel /> */}
    </div>
  )
}
