export class MenuOption {
  label: string;
  notification: string;
  action: (Pokemon) => void;

  static for(label: string, notification: string, action: (Pokemon) => void): MenuOption {
    return { label, action, notification };
  }
}
