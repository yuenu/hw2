import { ActionType } from './action-type'
import { Action } from './action'
import { ResponseData } from '@/types'

type IState = {
  year: string
  response: ResponseData[]
  display: ResponseData
  isLoading: boolean
  currentVillage: string
  currentDistrict: string
  villages: string[]
  error: string
}

export const initialState = {
  year: '110',
  response: [],
  display: {
    statistic_yyy: '110',
    district_code: '65000010002',
    site_id: '臺北市松山區',
    village: '莊敬里',
    household_ordinary_total: '0',
    household_business_total: '0',
    household_single_total: '0',
    household_ordinary_m: '0',
    household_business_m: '0',
    household_single_m: '0',
    household_ordinary_f: '0',
    household_business_f: '0',
    household_single_f: '0',
  },
  isLoading: false,
  currentVillage: '莊敬里',
  currentDistrict: '臺北市中山區',
  villages: [],
  error: '',
}

export const reducer = (
  state: IState = initialState,
  action: Action
): IState => {
  switch (action.type) {
    case ActionType.FETCH_START:
      return {
        ...state,
        isLoading: true,
      }

    case ActionType.FETCH_END:
      return {
        ...state,
        isLoading: false,
      }

    case ActionType.SET_RESPONSE:
      if (action.payload.response.responseMessage === '處理完成') {
        const responseData = action.payload.response.responseData
        const filterVillages: string[] = []

        responseData.forEach((item) => {
          if (item.site_id === state.currentDistrict) {
            filterVillages.push(item.village)
          }
        })

        const filterDisplay = responseData.filter(
          (item) => item.village === state.currentVillage
        )

        return {
          ...state,
          response: responseData,
          villages: filterVillages,
          currentVillage: filterVillages[0],
          display: filterDisplay[0],
          error: '',
        }
      } else {
        return {
          ...state,
          error: '查無資料',
          isLoading: false,
        }
      }

    case ActionType.SET_CURRENT_VILLAGE:
      const filterDisplay = state.response.filter(
        (item) => item.village === action.payload.currentVillage
      )[0]

      return {
        ...state,
        currentVillage: action.payload.currentVillage,
        display: filterDisplay,
      }

    case ActionType.SET_DISTRICT:
      const filterVillages: string[] = []
      state.response.forEach((item) => {
        if (item.site_id === action.payload.district) {
          filterVillages.push(item.village)
        }
      })

      const display = state.response.filter(
        (item) => item.village === filterVillages[0]
      )[0]

      return {
        ...state,
        currentDistrict: action.payload.district,
        villages: filterVillages,
        currentVillage: filterVillages[0],
        display: display,
      }
    case ActionType.SET_YEAR:
      return {
        ...state,
        year: action.payload.year,
      }
    default:
      return state
  }
}
