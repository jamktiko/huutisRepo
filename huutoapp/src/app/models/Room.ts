export class Room {
  id!: Number;
  kysymys!: string;
  format!: string;
  choices!: object;

  constructor(id: number, kysymys: string, format: string, choices: string) {}
}
