import { createSignal } from "solid-js";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", "z-index": "1000" }}>
      <button style={{ padding: "10px", "border-radius": "50%", background: "blue", color: "#fff" }} 
      onClick={() => setIsOpen(!isOpen())}>
        💬
      </button>
      <div style={{ display: isOpen() ? "block" : "none", position: "absolute", bottom: "60px", right: "0", width: "300px", height: "400px", background: "#fff", 
      "box-shadow": "0 0 10px rgba(0,0,0,0.2)", overflow: "auto", padding: "10px" }}>
        
      </div>
    </div>
  );
};

export default ChatWidget;
