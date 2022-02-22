import { Action, ActionType } from '@/state'

export const taipeiDistricts = [
  { id: 1, name: '中正區' },
  { id: 2, name: '大同區' },
  { id: 3, name: '中山區' },
  { id: 4, name: '松山區' },
  { id: 5, name: '大安區' },
  { id: 6, name: '萬華區' },
  { id: 7, name: '信義區' },
  { id: 8, name: '士林區' },
  { id: 9, name: '北投區' },
  { id: 10, name: '內湖區' },
  { id: 11, name: '南港區' },
  { id: 12, name: '文山區' },
]

type Props = {
  dispatch: React.Dispatch<Action>
  currentVillage: string
}

const Header = ({ dispatch, currentVillage }: Props) => {
  return (
    <header className="container-header">
      <h2 className="container-heading">地區</h2>
      <select
        name="site"
        className="container-select"
        onChange={(e) =>
          dispatch({
            type: ActionType.SET_DISTRICT,
            payload: {
              district: e.target.value,
            },
          })
        }
      >
        {taipeiDistricts.map((city) => {
          return (
            <option key={city.id} value={'臺北市' + city.name}>
              {city.name}
            </option>
          )
        })}
      </select>
      <span style={{ color: 'brown' }}>{currentVillage}</span>
    </header>
  )
}

export default Header
