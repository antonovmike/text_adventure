import fs from "fs";
import yaml from "js-yaml";
import { Plotline, Node } from "./types";

// Implement 'branch' tag later of remove it from server/plotline.yaml

export class GameEngine {
  private plotline: Plotline;
  private currentNode: Node;

  constructor(filePath: string) {
    const file = fs.readFileSync(filePath, "utf8");
    this.plotline = yaml.load(file) as Plotline;
    this.currentNode = this.plotline["start"];

    console.log(Object.keys(this.plotline));
    console.log(this.plotline["start"]);
  }

  getState() {
    return this.currentNode;
  }

  makeChoice(index: number) {
    const option = this.currentNode.options[index];
    if (!option) throw new Error("Wrong coice");
    this.currentNode = this.plotline[option.next];
    return this.currentNode;
  }
}
