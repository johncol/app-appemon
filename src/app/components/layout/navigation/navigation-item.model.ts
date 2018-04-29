export class NavigationItem {
  label: string;
  route: string[];

  static of(label: string, route: string[]): NavigationItem {
    return {
      label: label,
      route: route
    };
  }
}
