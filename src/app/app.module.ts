import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlusComponent } from './components/plus/plus.component';
import { HomeComponent } from './pages/home/home.component';
import { NumpadComponent } from './components/numpad/numpad.component';
import { FormsModule } from '@angular/forms';
import { SubtractComponent } from './components/subtract/subtract.component';
import { MultiplyComponent } from './components/multiply/multiply.component';
import { DivideComponent } from './components/divide/divide.component';

@NgModule({
  declarations: [AppComponent, PlusComponent, HomeComponent, NumpadComponent, SubtractComponent, MultiplyComponent, DivideComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
