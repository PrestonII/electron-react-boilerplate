import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './features/counter/counter.slice';
// eslint-disable-next-line import/no-cycle
import projectReducer from './features/project/project.slice';
// eslint-disable-next-line import/no-cycle
import settingsReducer from './features/settings/settings.slice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    project: projectReducer,
    settings: settingsReducer,
  });
}
