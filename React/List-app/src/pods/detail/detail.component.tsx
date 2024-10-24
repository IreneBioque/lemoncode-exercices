import React from "react";
import { MemberDetail } from "./detail.vm";

interface Props {
  member: MemberDetail;
  onReset: () => void;
}

export const Detail: React.FC<Props> = ({ member, onReset }) => {
  return (
    <>
      {member ? (
        <>
          <button onClick={onReset}>Reset</button>
          <img src={member.avatarUrl} alt="avatar" />
          <p> id: {member.id}</p>
          <p> login: {member.login}</p>
          <p> name: {member.name}</p>
          <p> company: {member.company}</p>
          <p> bio: {member.bio}</p>
        </>
      ) : (
        <h1>loading member</h1>
      )}
    </>
  );
};
