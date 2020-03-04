export default class ProductAsBack {
  private id: string;
  private imageUrl: string;
  private stock: number;
  private productName: string;
  private price: number;
  private productDescription: string;
  private favorite: string;
  private quantitySelected: number;

  constructor(
    $id: string,
    $imageUrl: string,
    $stock: number,
    $productName: string,
    $price: number,
    $productDescription: string,
    $favorite: string,
    $quantitySelected: number
  ) {
    this.id = $id;
    this.imageUrl = $imageUrl;
    this.stock = $stock;
    this.productName = $productName;
    this.price = $price;
    this.productDescription = $productDescription;
    this.favorite = $favorite;
    this.quantitySelected = $quantitySelected;
  }

  getId(): string {
    return this.id;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  getStock(): number {
    return this.stock;
  }

  getProductName(): string {
    return this.productName;
  }

  getPrice(): number {
    return this.price;
  }

  getProductDescription(): string {
    return this.productDescription;
  }

  getFavorite(): string {
    return this.favorite;
  }

  setFavorite(favorite: string) {
    this.favorite = favorite;
  }

  getQuantitySelected(): number {
    return this.quantitySelected;
  }

  setQuantitySelected(quantity: number) {
    this.quantitySelected = quantity;
  }

  updateStockFromQuantitySelected(): number {
    return this.getStock() - this.getQuantitySelected();
  }

  buildDTO() {
    return {
      id: this.id,
      image_url: this.imageUrl,
      stock: this.updateStockFromQuantitySelected(),
      productName: this.productName,
      price: this.price,
      productDescription: this.productDescription,
      favorite: this.favorite
    }
  }
}
