export type CommonAttributes = {
  name: string;
  url: string;
  created: string;
  films: string[];
};

export type Common = {
  hasNext: string | null;
  data: CommonAttributes[];
};
