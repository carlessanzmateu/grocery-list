class ApiRoutes {
  private $server = 'http://localhost:3000/';
  private $grocery = 'grocery';
  private $favorite = 'favorite';

  getGroceryListURL() {
    return `${this.$server}${this.$grocery}`;
  }

  getFavouriteListURL() {
    const isFavouriteFlag = '1';
    return `${this.getGroceryListURL()}?${this.$favorite}=${isFavouriteFlag}`;
  }
}

export default new ApiRoutes();