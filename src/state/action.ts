import { ActionType } from './action-type'
import { Response } from '@/types'

interface FetchDataStartAction {
  type: ActionType.FETCH_START
}

interface FetchDataEndAction {
  type: ActionType.FETCH_END
}

interface SetResponseAction {
  type: ActionType.SET_RESPONSE
  payload: {
    response: Response
  }
}

interface SetCurrentVillageAction {
  type: ActionType.SET_CURRENT_VILLAGE
  payload: {
    currentVillage: string
  }
}

interface SetDistrictAction {
  type: ActionType.SET_DISTRICT
  payload: {
    district: string
  }
}

interface SetDiffYearAction {
  type: ActionType.SET_YEAR
  payload: {
    year: string
  }
}

export type Action =
  | SetResponseAction
  | FetchDataStartAction
  | FetchDataEndAction
  | SetCurrentVillageAction
  | SetDistrictAction
  | SetDiffYearAction
