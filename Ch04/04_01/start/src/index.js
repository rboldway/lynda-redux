import storeFactory from './store'
import { addDay, removeDay, setGoal, addError, clearError, changeSuggestions, clearSuggestions} from './actions'

const store = storeFactory()

store.dispatch(
    addDay("Heavenly", "2016-12-22")
)

store.dispatch(
    removeDay("2016-12-22")
)

store.dispatch(
    setGoal(55)
)

store.dispatch(
    addError("My first error")
)

store.dispatch(
    clearError(0)
)

store.dispatch(
    changeSuggestions(["One", "Two", "Three"])
)

store.dispatch(
    clearSuggestions()
)