export default {
  const getProduct = async function () {
    const response = await this.$axios.$get('/products')
    console.log(response)
    return response
  }

}

