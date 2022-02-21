export interface Field {
  type: string
  id: string
}

export interface Record {
  statistic_yyy: string
  district_code: string
  site_id: string
  village: string
  household_ordinary_total: string
  household_business_total: string
  household_single_total: string
  household_ordinary_m: string
  household_business_m: string
  household_single_m: string
  household_ordinary_f: string
  household_business_f: string
  household_single_f: string
}

export interface Result {
  resource_id: string
  limit: number
  total: number
  fields: Field[]
  records: Record[]
}

export interface RootObject {
  success: boolean
  result: Result
}
