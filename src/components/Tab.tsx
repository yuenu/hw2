import Logo from '@/assets/images/taipeilogo.png'
import { Action, ActionType } from '@/state'

const yearList = ['110', '109', '108', '107', '106']

type Props = {
  dispatch: React.Dispatch<Action>
  year: string
}

const Tab = ({ dispatch, year }: Props) => {
  const handleClick = (year: string) => {
    dispatch({ type: ActionType.SET_YEAR, payload: { year } })
  }
  return (
    <div className="tab">
      <div className="tab-logo">
        <img src={Logo} alt="" />
      </div>
      <span>{year}年人口戶數及性別</span>
      <div className="years">
        {yearList.map((year) => {
          return (
            <button
              key={year}
              className="active"
              data-year="110"
              type="button"
              onClick={() => handleClick(year)}
            >
              {year}年
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Tab
