import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CardComponent } from './components/card/card.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { GridComponent } from './components/grid/grid.component';
import { ListComponent } from './components/list/list.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TreeComponent } from './components/tree/tree.component';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { ProgressComponent } from './components/progress/progress.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SnakbarComponent } from './components/snakbar/snakbar.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TableComponent } from './components/table/table.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    AboutComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
    InputComponent,
    SelectComponent,
    SliderComponent,
    ToggleComponent,
    CardComponent,
    ExpansionComponent,
    GridComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    TreeComponent,
    BadgeComponent,
    IconComponent,
    ProgressComponent,
    BottomSheetComponent,
    DialogComponent,
    SnakbarComponent,
    TooltipComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    SharedModule,
  ],
  providers: [
    ElectronService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
