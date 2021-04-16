import { Injectable } from "@angular/core";
import { Action, combineReducers, Reducer } from "redux";
import { FluxStateInterface } from "./flux-state.interface";

@Injectable()
export class FluxReducersService {
	constructor() {
	}

	createReducers(): Reducer<FluxStateInterface> {
		return combineReducers({
		});
	}

	composeReducers<S>(...reducers: Reducer<S>[]): Reducer<S> {
		return (state: S, action: Action) => {
			let newState = state;
			for (const reducer of reducers) {
				newState = reducer(newState, action);
			}
			return newState;
		};
	}
}
