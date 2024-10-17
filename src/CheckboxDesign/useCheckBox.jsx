import { useState } from "react";
import { checkBoxData } from "../constants";

const useCheckBox = () => {
  const [data, setData] = useState(checkBoxData);
  const updateNodeAndChildren = (node, newChecked) => ({
    ...node,
    checked: newChecked,
    children: node.children.map((child) =>
      updateNodeAndChildren(child, newChecked)
    ),
  });

  // Function to find and update a specific node and its children
  const updateTree = (nodes, targetId, newChecked) => {
    return nodes.map((node) => {
      if (node.id === targetId) {
        return updateNodeAndChildren(node, newChecked);
      }

      if (node.children.length > 0) {
        return {
          ...node,
          children: updateTree(node.children, targetId, newChecked),
        };
      }

      return node;
    });
  };

  const onChecked = (id, currentChecked) => {
    const newChecked = !currentChecked;
    setData(updateTree(data, id, newChecked));
  };

  return { data, onChecked };
};

export default useCheckBox;
