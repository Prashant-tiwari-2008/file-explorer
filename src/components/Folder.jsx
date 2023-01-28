import { useState } from "react";

function Folder({ explorerData }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visiable: false,
    isFolder: false
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({ visiable: true, isFolder });
  };

  const onAddFolder = (e) => {};

  if (explorerData.isFolder) {
    return (
      <div style={{ margin: "5px" }}>
        <div onClick={() => setExpand((presve) => !presve)}>
          <span>📁 {explorerData.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.visiable && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📃"}</span>
              <input
                type="text"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visiable: false })}
              />
            </div>
          )}
          {explorerData.items.map((exp) => {
            return <Folder key={exp.id} explorerData={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span style={{ paddingLeft: "10px" }}>📃{explorerData.name}</span>;
  }
}
export default Folder;
