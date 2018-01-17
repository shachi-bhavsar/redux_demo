import { connect } from 'react-redux'
import { changeStatus } from '../actions'
import ItemList from '../components/ItemList'

const getAvailableItems = (reducer, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return reducer
    case 'SHOW_OUTOFSTOCK':
      return reducer.filter(t => t.OutOfStock)
    case 'SHOW_AVAILABLE':
      return reducer.filter(t => !t.OutOfStock)
  }
}

const mapStateToProps = (state) => {
    return {
      name : getAvailibilityList(state.name, state.reducer)
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
      onItemClick: (id) => {
        dispatch(changeStatus(id))
      }
    }
}
  
const DisplayItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)
  
export { DisplayItemList}
