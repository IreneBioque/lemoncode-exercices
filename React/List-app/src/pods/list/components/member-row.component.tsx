import React from "react";
import { routes } from "@/router";
import { MemberEntity } from "../list.vm";

interface Props {
  member: MemberEntity;
  onSelect: () => void;
}

export const MemberRow: React.FC<Props> = ({ member, onSelect }) => (
  <>
    <img src={member.avatar_url} />
    <span>{member.id}</span>
    <div onClick={onSelect}>{member.login}</div>
  </>
);
