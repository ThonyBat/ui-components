import { Injectable } from "@angular/core";
import { combineEpics, Epic } from "redux-observable";

@Injectable()
export class FluxEpicsService {
	constructor() {
	}

	createEpics(): Epic<any, any, any> {
		return combineEpics(
		);
	}
}
