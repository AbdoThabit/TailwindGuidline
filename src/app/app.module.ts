import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './Components/colors/colors.component';
import { CustomizatiosComponent } from './Components/customizations/customizatios.component';
import { TypograpyComponent } from './Components/typograpy/typograpy.component';
import { SpacingComponent } from './Components/spacing/spacing.component';
import { FlexBoxComponent } from './Components/flex-box/flex-box.component';
import { GridsComponent } from './Components/grids/grids.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    CustomizatiosComponent,
    TypograpyComponent,
    SpacingComponent,
    FlexBoxComponent,
    GridsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
