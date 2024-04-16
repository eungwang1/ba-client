import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import "./select-label-with-remove-button.css";

interface SelectLabelWithRemoveButtonProps {
  label: string;
  onRemove: () => void;
}

const SelectLabelWithRemoveButton: React.FC<
  SelectLabelWithRemoveButtonProps
> = ({ label, onRemove }) => {
  return (
    <div className="flex justify-between">
      <div>{label}</div>
      <button
        className="select-remove-btn"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        <CloseOutlined />
      </button>
    </div>
  );
};

export default SelectLabelWithRemoveButton;
