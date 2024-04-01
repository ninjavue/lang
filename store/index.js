
export const state = () => ({
    todos: [
        {
            name: 'Vali',
            age: 21,
            depart: 'Ishchi'
        }
    ]
});


export const getters = {
    todos(state){
        return state.todos
    }
};

export const mutations = {
    setTodos(state, todos) {
        state.todos = todos;
    },
    addTodo(state, payload) {
        state.todos.push(payload);
    },
    updateTodo(state, payload) {
        const index = state.todos.findIndex(item => item.id === payload.id);
        if (index !== -1) {
            state.todos.splice(index, 1, payload);
        }
    },
    removeTodo(state, payload) {
        state.todos = state.todos.filter(item => item.id !== payload);
    }
};

export const actions = {
    async getTodos({ commit }) {
        try {
            await this.$axios.$get('todos').then(res => {
                console.log(res)
                commit('setTodos', res)
            })
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    },
    async createTodos({ commit }, payload) {
        try {
            const response = await this.$axios.$post('signup', payload);
            commit('addTodo', response);
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    },
    async updatedTodos({ commit }, payload) {
        try {
            const response = await this.$axios.$put(`todos/${payload.id}`, payload);
            commit('updateTodo', response);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    },
    async deleteItem({ commit }, payload) {
        try {
            await this.$axios.$delete(`todos/${payload}`);
            commit('removeTodo', payload);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
};