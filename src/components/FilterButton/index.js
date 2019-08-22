import React from 'react'
import { inject, observer } from 'mobx-react'

const FilterButton = inject('filterStore')(observer(({filterStore, filter}) => {
    return (
        <div className="filter-button">
            <button className="btn"
                    onClick={() => filterStore.changeFilter(filter)}
            >
                {filter}
            </button>
        </div>
    )
}))

export default FilterButton