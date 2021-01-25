import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Geoffrey',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Théo',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id:'1',
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description:'high quality product'
        },
        {
            _id:'2',
            name:'Addidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand:'Addidas',
            rating: 4,
            numReviews: 12,
            description:'high quality product'
        },
        {
            _id:'3',
            name:'Lacoste Slim Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price: 110,
            countInStock: 0,
            brand:'Lacoste',
            rating: 4.8,
            numReviews: 8,
            description:'high quality product'
        },
        {
            _id:'4',
            name:'Nike Slim Pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand:'Nike',
            rating: 4.5,
            numReviews: 14,
            description:'high quality product'
        },
        {
            _id:'5',
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand:'Puma',
            rating: 4.5,
            numReviews: 10,
            description:'high quality product'
        },
        {
            _id:'6',
            name:'Lacoste Slim Pant',
            category:'Pants',
            image:'/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brand:'Lacoste',
            rating: 4.7,
            numReviews: 20,
            description:'high quality product'
        },
    ]
}

export default data;