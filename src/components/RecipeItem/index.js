export default {
  name: 'RecipeItem',
  functional: true,
  props: {
    image: String,
    slug: String,
    title: String
  },

  render (h, { props }) {
    const { image, slug, title } = props

    return (
      <router-link to={ `/food/recipes/${slug}` } class="item">
        <img class="item__background" src={ image } />
        <div class="item__content">
          <div class="item__title">{ title }</div>
        </div>
      </router-link>
    )
  }
}
