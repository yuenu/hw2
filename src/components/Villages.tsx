import { Action, ActionType } from '@/state'
type Props = {
  dispatch: React.Dispatch<Action>
  villages: string[]
  currentVillage: string
}

const Villages = ({ dispatch, villages, currentVillage }: Props) => {
  return (
    <div className="villages">
      {villages.map((village) => (
        <span
          className={currentVillage === village ? 'active' : ''}
          key={village}
          onClick={() =>
            dispatch({
              type: ActionType.SET_CURRENT_VILLAGE,
              payload: { currentVillage: village },
            })
          }
        >
          {village}
        </span>
      ))}
    </div>
  )
}

export default Villages
