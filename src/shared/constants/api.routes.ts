class ApiRoutes {
  private $server = 'http://localhost:3000/';
  private $grocery = 'grocery';

  getGroceryListURL() {
    return `${this.$server}${this.$grocery}`;
  }

}

export default new ApiRoutes();