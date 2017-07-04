export class AddNewProduct {
  constructor(
    public id: number,
    public name: string,
    public rating: number,
    public brand: string,
    public price: string,
    public os: string,
    public stock: string,
    public camera: string,
    public imageUrl: string,
    public desc: string
    ) {
  }
}
