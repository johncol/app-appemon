import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { MenuOption } from "./menu-option.model";
import { OptionsMenuService } from "./services/options-menu.services";

@Component({
  selector: 'appemon-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
  @Input() options: MenuOption[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: OptionsMenuService) { }

  ngOnInit(): void {
    if (!this.options) {
      this.options = this.service.getDefaultOptions();
    }
  }
}
