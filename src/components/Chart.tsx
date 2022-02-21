import { Record } from '@/types'

const chartNumber = [
  '90%',
  '80%',
  '70%',
  '60%',
  '50%',
  '40%',
  '30%',
  '20%',
  '10%',
  '0%',
]

type ChartProps = {
  display: Record
}

const Chart = ({ display }: ChartProps) => {
  const rateHouseholdOrdinaryMale =
    (parseInt(display.household_ordinary_f) /
      (parseInt(display.household_ordinary_m) +
        parseInt(display.household_ordinary_f))) *
    100

  const rateHouseholdOrdinaryFemale =
    (parseInt(display.household_ordinary_m) /
      (parseInt(display.household_ordinary_m) +
        parseInt(display.household_ordinary_f))) *
    100

  const rateHouseholdSingleMale =
    (parseInt(display.household_single_m) /
      (parseInt(display.household_single_m) +
        parseInt(display.household_single_f))) *
    100

  const rateHouseholdSingleFemale =
    (parseInt(display.household_single_f) /
      (parseInt(display.household_single_m) +
        parseInt(display.household_single_f))) *
    100

  return (
    <div className="chart">
      <ul className="chart-number">
        {chartNumber.map((num) => (
          <li key={num}>
            <span>{num}</span>
          </li>
        ))}
      </ul>
      <table>
        <tbody>
          <tr>
            <th>共同生活戶</th>
            <td style={{ height: `${rateHouseholdOrdinaryMale}%` }}>
              <span>{display.household_ordinary_m}</span>
              <div>{rateHouseholdOrdinaryMale.toFixed(2)}%</div>
            </td>
            <td style={{ height: `${rateHouseholdOrdinaryFemale}%` }}>
              <span>{display.household_ordinary_f}</span>
              <div>{rateHouseholdOrdinaryFemale.toFixed(2)}%</div>
            </td>
          </tr>
          <tr>
            <th>獨立生活戶</th>
            <td style={{ height: `${rateHouseholdSingleMale}%` }}>
              <span>{display.household_single_m}</span>
              <div>{rateHouseholdSingleMale.toFixed(2)}%</div>
            </td>
            <td style={{ height: `${rateHouseholdSingleFemale}%` }}>
              <span>{display.household_single_f}</span>
              <div>{rateHouseholdSingleFemale.toFixed(2)}%</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tags">
        <div className="tag">
          <div className="tag-icon"></div>
          <div className="tag-name">男</div>
        </div>
        <div className="tag">
          <div className="tag-icon"></div>
          <div className="tag-name">女</div>
        </div>
      </div>
    </div>
  )
}

export default Chart
