import React from "react";
import { ListContainer } from "@/pods/list";
import { DetailContainer } from "@/pods/detail";

export const ListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!selected ? (
        <ListContainer onSelectMember={setSelected} />
      ) : (
        <div>
          <DetailContainer
            id={selected}
            onReset={() => {
              setSelected(null);
            }}
          />
        </div>
      )}
    </div>
  );
};
