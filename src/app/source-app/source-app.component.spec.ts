import { TestBed } from "@angular/core/testing";
import { SourceAppComponent } from "./source-app.component";

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				SourceAppComponent
			],
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(SourceAppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'ui-components'`, () => {
		const fixture = TestBed.createComponent(SourceAppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("ui-components");
	});

	it("should render title", () => {
		const fixture = TestBed.createComponent(SourceAppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector(".content span").textContent).toContain("ui-components app is running!");
	});
});
