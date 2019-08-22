import { action, decorate, observable } from 'mobx'

class FilterStore {
    filter

    constructor() {
        this.filter = 'all'
    }

    changeFilter(filter) {
        this.filter = filter
    }
}

decorate(FilterStore,{
    filter: observable,
    changeFilter: action,
})

export default new FilterStore();