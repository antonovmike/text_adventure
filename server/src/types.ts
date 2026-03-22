export interface Options {
  label: string;
  next: string;
}

export interface Node {
  id: string;
  branch: string;
  text: string;
  options: Options[];
}

export type Plotline = Record<string, Node>;
