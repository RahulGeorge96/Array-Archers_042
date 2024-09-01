import {legacy_createStore} from "redux"
import { Reducer } from "./reducer"

export let store = legacy_createStore(Reducer)