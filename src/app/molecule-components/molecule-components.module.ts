import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
			CommonModule,
			RouterModule,
			FormsModule,
			ReactiveFormsModule
	],
	declarations: [
	],
	exports: [
	],
	providers: [
	]
})
export class MoleculeComponentsModule {
	static forRoot(): ModuleWithProviders<MoleculeComponentsModule> {
		return {
			ngModule: MoleculeComponentsModule,
			providers: [
			]
		};
	}
}
