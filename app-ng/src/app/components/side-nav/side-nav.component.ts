import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public sideNavData: {path: string, text: string}[] = [
    {path: 'about', text: 'About'},
    {path: 'button', text: 'Button'},
    {path: 'badge', text: 'Badge'},
    {path: 'bottom', text: 'Bottom'},
    {path: 'card', text: 'Card'},
    {path: 'checkbox', text: 'Checkbox'},
    {path: 'dialog', text: 'Dialog'},
    {path: 'expansion', text: 'Expansion'},
    {path: 'form', text: 'Form'},
    {path: 'gird', text: 'Gird'},
    {path: 'icon', text: 'Icon'},
    {path: 'input', text: 'Input'},
    {path: 'list', text: 'List'},
    {path: 'progress', text: 'Progress'},
    {path: 'select', text: 'Select'},
    {path: 'slider', text: 'Slider'},
    {path: 'snakbar', text: 'Snakbar'},
    {path: 'stepper', text: 'Stepper'},
    {path: 'table', text: 'Table'},
    {path: 'tabs', text: 'Tabs'},
    {path: 'toggle', text: 'Toggle'},
    {path: 'tooltip', text: 'Tooltip'},
    {path: 'tree', text: 'Tree'},
  ]
  constructor(private route: Router) { }

  ngOnInit() {
  }
  navTo(p: string) {
    this.route.navigate([p]);
  }
}
