import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionsComponent} from './questions.component';
import {MatIconModule, MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    NgModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionsComponent
      }
    ])
  ]
})
export class QuestionsModule {
}
