import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RootComponent } from "./root/root.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
	declarations: [
			RootComponent,
			WelcomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule { }
