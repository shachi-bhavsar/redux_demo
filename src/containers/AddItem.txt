import AddItemForm from '../components/AddItemForm'

import { connect } from 'react-redux'
import { addInList } from '../actions'


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (desc) => {
      dispatch(addInList(desc))
    }
  }
}

let AddItem = connect(null, mapDispatchToProps)(AddItemForm)

export default AddItem