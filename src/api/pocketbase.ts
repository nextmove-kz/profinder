import PocketBase from "pocketbase";
import { TypedPocketBase } from "./api_types";

export type Sorting = "+created" | "-created";

const pocketbase = new PocketBase(
  "https://profinder.pockethost.io"
) as TypedPocketBase;
pocketbase.autoCancellation(false);

export default pocketbase;
