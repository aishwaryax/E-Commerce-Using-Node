const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    resetToken: String,
    resetTokenExpiration: Date,
    cart: {
        items: [{
            productId: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }]
    }
})

userSchema.methods.addToCart = function(product) {
    const cartProductIndex = this.cart.items.findIndex(cartProduct => {
        return cartProduct.productId.toString() === product._id.toString()
    })
    let newQuantity = 1
    const updatedCartItems = [...this.cart.items]
    if (cartProductIndex >= 0) {
        newQuantity = this.cart.items[cartProductIndex].quantity + 1
        updatedCartItems[cartProductIndex].quantity = newQuantity
    } else {
        updatedCartItems.push({ productId: product._id, quantity: newQuantity })
    }
    const updatedCart = { items: updatedCartItems }
    this.cart = updatedCart
    return this.save()

}

userSchema.methods.removeFromCart = function(productId) {
    console.log("schema : ",
        productId)
    console.log(this.cart.items)
    console.log(this.cart.items[0].productId.toString() !== productId.toString())
    console.log(this.cart.items[1].productId.toString() !== productId.toString())
    var alter = function(item) {
        return item.productId.toString() !== productId.toString()
    }
    const updatedCartItems = this.cart.items.filter(alter)
    console.log(updatedCartItems)
    this.cart.items = updatedCartItems
    console.log(this.cart.items)
    return this.save()
}
userSchema.methods.clearCart = function() {
    this.cart = { items: [] }
    return this.save()
}

module.exports = mongoose.model('User', userSchema)