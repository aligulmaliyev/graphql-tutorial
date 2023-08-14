export interface ICharacter {
  id: number
  name: string
  image: string
  gender: string
  episode: {
    name: string
    episode: string
  }[]
}
