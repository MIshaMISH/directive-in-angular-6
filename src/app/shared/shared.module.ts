import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import { MultiColorDirective } from './directives/multi-color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserListComponent, MultiColorDirective],
  exports: [UserListComponent]
})
export class SharedModule {
}
