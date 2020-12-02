import { Dispatch, SetStateAction } from "react";

export default interface ISignedUserContext {
  isSigned: boolean,
  setIsSigned: Dispatch<SetStateAction<boolean>>,
}