import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { enableBatching } from 'redux-batched-actions'
import { composeWithDevTools } from 'redux-devtools-extension'

/** saga Middleware */
const sagaMiddleware = createSagaMiddleware()

/** Create redux store */
const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

/** run saga watchers */
sagaMiddleware.run(rootSaga)

export default store
