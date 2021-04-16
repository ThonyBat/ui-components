import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "welcome"
	},
	{
		path: "welcome",
		component: WelcomeComponent
	}
];

@NgModule({
	imports: [
			RouterModule.forRoot(routes, {relativeLinkResolution: "corrected"})
	],
	exports: [
			RouterModule
	]
})
export class AppRoutingModule {
}
