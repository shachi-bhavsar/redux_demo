import React from 'react'

const AddItemForm = ({onClick}) =>
(
    <div>
        <input ref={name=>this.name=name}/>
        <input type='button' onClick={e => 
            {
                onClick(this.name.value)
                this.name.value = ''
            }
        }
        />
    </div>
)

export default AddItemForm
