import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShortcutComponent} from './shortcut.component';

const routes: Routes = [{
  path: '',
  component: ShortcutComponent,
  children: [{
    path: '',
    redirectTo: 'typography',
    pathMatch: 'full'
  }, {
    path: 'typographys',
    loadChildren: './typographys/typographys.module#TypographyModule'
  }, {
    path: 'basicForm',
    loadChildren: './basic-form/basic-form.module#BasicFormModule'
  }, {
    path: 'tableList',
    loadChildren: './table-list/table-list.module#TableListModule'
  }, {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  }, {
    path: 'advanced',
    loadChildren: './advanced/advanced.module#AdvancedModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShortcutRoutingModule {
}
