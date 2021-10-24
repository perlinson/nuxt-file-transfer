export const state = () => ({
  Employees: [],
  currEmployeeIndex: {
    type: Number,
    default: 0
  }
})

export const mutations = {
  setItems(state, lists) {
    state.Employees = lists
  },
  hideLoading(state) {
    state.isLoading = false
  },
  showLoading(state) {
    state.isLoading = true
  }
}

export const getters = {
  Employees: (state) => state.Employees,
  currEmployee: (state) => {
    if (state.Employees.length > 0) return state.Employees[state.currEmployeeIndex]
  }
}

export const actions = {
  async getEmployeeList({ commit }) {
    commit('showLoading')

    try {
      await this.$axios.$get('/api/Employee/').then((result) => {
        commit('setItems', result.data)
        commit('hideLoading')
      })
    } catch (err) {
      console.log(err)
    }
  },
  async joinEmployee({ commit }, Employee) {
    commit('showLoading')
    try {
      await this.$axios
        .$patch(`/api/Employee/${Employee._id}`, {
          players: [
            Employee.data.players[0],
            {
              player2: {
                player_name: localStorage.user_name
              }
            }
          ]
        })
        .then((result) => {
          this.$router.push({ path: '/startgame/' + Employee._id })
        })
    } catch (err) {
      console.log(err)
    }
  },
  async createEmployee({ commit, dispatch, rootState }, EmployeeName) {
    await this.$axios
      .$post('/api/Employee/create', {
        email: rootState.auth.user.email,
        EmployeeName
      })
      .then((response) => {
        dispatch('getEmployeeList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  },

  async updateEmployee({ commit, dispatch }, event) {
    const formdata = new FormData(event.target)
    const EmployeeName = formdata.get('nameEmployee')
    await this.$axios
      .$post('/api/Employee/createEmployee', {
        Employee_name: EmployeeName
      })
      .then((response) => {
        dispatch('getEmployeeList')
        this.$router.push({ path: '/startgame/' + response.id })
      })
      .catch((error) => {
        console.log(error)
        commit('hideLoading')
        this.$router.push('/error')
      })
  }
}
