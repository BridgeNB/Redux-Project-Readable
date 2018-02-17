import * as API from '../api/index'
import * as Types from './types'

export const fetchCategories = () => {
  return (dispatch) => {
    API.fetchCategories().then(res => {
      dispatch({ type: Types.FETCH_CATEGORIES, res})
    })
  }
}
