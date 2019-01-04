import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AppMaterialModule} from './app.material.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
    ]
})
export class SharedModule {
}
