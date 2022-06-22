class ContainerProduct {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    nextId() {
        this.id++
        return this.id;
    }

    getAll() {
        return this.products;
    }

    getById(productId) {
        return this.products.filter(item => item.id == productId)[0];
    }

    deleteById(productId) {
        this.products = this.products.filter(item => item.id != productId);
    }

    create(title, price, image) {
        let product = {
            id: this.nextId(),
            title: title,
            price: price,
            image: image,
        }

        this.products.push(product)
        return product.id
    }

    update(productId, title, price, image) {

        let product = this.products.filter(item => item.id == productId)[0];
        product.title = title;
        product.price = price;
        product.image = image;

        let products = this.products.filter(item => item.id != productId);
        products.push(product);
        this.products = products;
        return products;
    }

}

module.exports = ContainerProduct