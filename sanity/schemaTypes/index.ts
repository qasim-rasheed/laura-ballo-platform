import { type SchemaTypeDefinition } from "sanity";
import { landingPage } from "./landingPage";
import { service } from "./service";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, service],
};
