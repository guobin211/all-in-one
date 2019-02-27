import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnakbarComponent } from './components/snakbar/snakbar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TooltipComponent } from '@angular/material';
import { TreeComponent } from './components/tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'badge', component: BadgeComponent },
      { path: 'bottom', component: BottomSheetComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'card', component: CardComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'expansion', component: ExpansionComponent },
      { path: 'form', component: FormComponent },
      { path: 'gird', component: GridComponent },
      { path: 'icon', component: IconComponent },
      { path: 'input', component: InputComponent },
      { path: 'list', component: ListComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'select', component: SelectComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'snakbar', component: SnakbarComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'table', component: TableComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'toggle', component: ToggleComponent },
      { path: 'tooltip', component: TooltipComponent },
      { path: 'tree', component: TreeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
