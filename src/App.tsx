import { useCallback, useEffect, useReducer } from 'react'
import { reducer, initialState, ActionType } from '@/state'
import { Chart, Tab, Spinner, Villages, Header } from '@/components'
import { fetcher } from '@/api/OpenDataAPI'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const memorizedFetch = useCallback(async () => {
    dispatch({ type: ActionType.FETCH_START })

    const response = await fetcher(state.year)
    dispatch({
      type: ActionType.SET_RESPONSE,
      payload: {
        response,
      },
    })

    dispatch({ type: ActionType.FETCH_END })
  }, [state.year])

  useEffect(() => {
    memorizedFetch()
  }, [memorizedFetch])

  return (
    <>
      <Tab year={state.year} dispatch={dispatch} />
      <div className="container">
        <Header dispatch={dispatch} currentVillage={state.currentVillage} />
        {state.isLoading ? (
          <Spinner />
        ) : (
          <>
            <Villages
              dispatch={dispatch}
              currentVillage={state.currentVillage}
              villages={state.villages}
            />
            <Chart display={state.display} />
          </>
        )}
      </div>
    </>
  )
}

export default App
