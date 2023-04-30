import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListDbzComponent } from './components/list-dbz/list-dbz.component';
import { FormDbzComponent } from './components/form-dbz/form-dbz.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, ListDbzComponent, FormDbzComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
