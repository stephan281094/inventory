export default {
  name: 'RecipeHero',
  functional: true,
  props: {
    image: String,
    title: String,
    serves: Number,
    time: String,
    difficulty: {
      type: String,
      default: 'Not too tricky'
    }
  },

  render (h, { props }) {
    const { image, serves, time, title, difficulty } = props;

    return (
      <div class="hero">
        <img class="hero__background" src={ image } alt="" />
        <div class="hero__content">
          <h1 class="hero__title">{ title }</h1>
          <h2 class="hero__description">
            { `Serves: ${serves} - Cooks in: ${time} - Difficulty: ${difficulty}` }
          </h2>
        </div>
      </div>
    )
  }
}
