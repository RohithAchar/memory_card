import { useState } from "react";
const InstructionModal = () => {
  const [hide, setHide] = useState(false);
  return (
    <div
      onClick={() => setHide(true)}
      className={hide ? "instruction-modal hide" : "instruction-modal"}
    >
      <h3>Instructions</h3>
      <p>- Click on image to get score.</p>
      <p>- Don't click on same image twice :)</p>
      <button onClick={() => setHide(true)}>Got it</button>
    </div>
  );
};

export default InstructionModal;
