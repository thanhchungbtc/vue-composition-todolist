import {v4} from 'uuid'

function wait(promise, n = 1500) {
  return new Promise(res => setTimeout(() => res(promise), n))
}

export const todosAPI = {
  list: () => {
    return wait((() => {
      return [
        {id: v4(), title: "Clean my room", completed: false},
        {id: v4(), title: "Reading 1 chapter of a favorite book", completed: false},
        {id: v4(), title: "Go to supermarket", completed: true},
        {id: v4(), title: "Go to the gym", completed: false},
        {id: v4(), title: "Do some coding", completed: false},
        {id: v4(), title: "Drink water", completed: false},
      ]
    })(), 500)
  },

  create: (title) => {
    return wait((() => {
      return {
        id: v4(),
        title,
        completed: false
      }
    })(), 500)
  },

  update: (todo) => {
    return wait((() => {
      return todo
    })(), 0)
  }
}

