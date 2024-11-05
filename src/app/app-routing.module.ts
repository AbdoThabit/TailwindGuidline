import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './Components/colors/colors.component';
import { CustomizatiosComponent } from './Components/customizations/customizatios.component';
import { TypograpyComponent } from './Components/typograpy/typograpy.component';
import { SpacingComponent } from './Components/spacing/spacing.component';
import { FlexBoxComponent } from './Components/flex-box/flex-box.component';
import { GridsComponent } from './Components/grids/grids.component';

const routes: Routes = [
  { path: 'Colors', component: ColorsComponent },
  { path: 'Custom', component: CustomizatiosComponent },
  { path: 'Typography', component: TypograpyComponent },
  { path: 'Spacing', component: SpacingComponent },
  { path: 'Flex', component: FlexBoxComponent },
  { path: 'Grid', component: GridsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
