export class Pokemon {
  constructor(
    public base_experience: number,
    public height: number,
    public id: number,
    public name: number,
    public sprites: PokeSprites,
    public weight: number,
    public moves: any[]
  ) {}
}

class PokeSprites {
  constructor(
    public back_default: string,
    public back_female: string,
    public back_shiny: string,
    public back_shiny_female: string,
    public front_default: string,
    public front_female: string,
    public front_shiny: string,
    public front_shiny_female: string
  ) {}
}
