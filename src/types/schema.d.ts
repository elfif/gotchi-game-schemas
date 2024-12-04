export type Schema = {
  name: string;
  version: string;
  description: string;
  author: string;
  website: string;
  schema: {
    classes: string[];
    traits: string[];
  };
};