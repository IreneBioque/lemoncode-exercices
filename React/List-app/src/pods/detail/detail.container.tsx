import React from "react";
import { useParams } from "react-router-dom";
import { Detail } from "./detail.component";
import { MemberDetail } from "./detail.vm";
import { getMemberDetail } from "./api/api";
import { mapDetailToVM } from "./detail.mappers";

interface Props {
  id: string;
  onReset: () => void;
}

export const DetailContainer: React.FC<Props> = (props) => {
  const { id, onReset } = props;

  const [member, setMember] = React.useState<MemberDetail>();

  React.useEffect(() => {
    getMemberDetail(id).then(mapDetailToVM).then(setMember);
  }, [id]);

  return <Detail member={member} onReset={onReset} />;
};
