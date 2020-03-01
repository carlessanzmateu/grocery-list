class NavigationRoutes {
  private $home = '/';
  private $cart = '/cart';
  private $favorites = '/favorites';

  getHomePath() {
    return this.$home;
  }

  getCartPath() {
    return this.$cart;
  }

  getFavoritesPath() {
    return this.$favorites;
  }
}

export default new NavigationRoutes();