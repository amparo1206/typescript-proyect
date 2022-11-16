export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
    tittle: string,
    createdAd: Date,
    stock: number,
    size?:Sizes
  }
