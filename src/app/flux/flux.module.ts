import { NgReduxRouter, NgReduxRouterModule } from "@angular-redux/router";
import { NgRedux, NgReduxModule } from "@angular-redux/store";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { createEpicMiddleware, EpicMiddleware } from "redux-observable";
import { FluxEpicsService } from "./flux-epics.service";
import { FluxReducersService } from "./flux-reducers.service";
import { FluxStateInterface } from "./flux-state.interface";

@NgModule({
	imports: [
		NgReduxModule,
		NgReduxRouterModule,
	]
})
export class FluxModule {
	constructor(public store: NgRedux<FluxStateInterface>, private ngReduxRouter: NgReduxRouter,
				private fluxEpicsService: FluxEpicsService, private fluxReducersService: FluxReducersService) {

		const epicMiddleware: EpicMiddleware<any, any, any> = createEpicMiddleware();
		store.configureStore(fluxReducersService.createReducers(), {},
				[epicMiddleware], []);

		epicMiddleware.run(fluxEpicsService.createEpics());
	}

	static forRoot(): ModuleWithProviders<FluxModule> {
		return {
			ngModule: FluxModule,
			providers: [
				/**
				 * Flux
				 */
				FluxReducersService,
				FluxReducersService
			]
		};
	}
}
