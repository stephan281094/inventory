import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      food: {
        recipes: [
          {
            slug: 'chicken-fajita',
            title: 'Chicken Fajita',
            image: 'http://localhost:3000/public/assets/images/food/chicken-fajita.jpg'
          },
          {
            slug: 'oatmeal',
            title: 'Oatmeal',
            image: 'http://localhost:3000/public/assets/images/food/gnocchi.jpg'
          },
          {
            slug: 'surimi-salad',
            title: 'Surimi Salad',
            image: 'http://localhost:3000/public/assets/images/food/surimi-salad.jpg'
          },
          {
            slug: 'red-sauce-salad',
            title: 'Chicken Fajita',
            image: 'http://localhost:3000/public/assets/images/food/tortellini.jpg'
          },
          {
            slug: 'kung-wow-chicken',
            title: 'Kung Wow Chicken',
            image: 'http://localhost:3000/public/assets/images/food.jpg'
          },
          {
            slug: 'tasty-japan-wok',
            title: 'Tasty™ Japan Wok',
            image: 'http://localhost:3000/public/assets/images/food/mango-juice.jpg'
          }
        ]
      }
    }
  })
}
