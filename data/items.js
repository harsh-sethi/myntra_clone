const items = [
    {
        id: '1',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '2',
        image: 'images/2.jpg',
        company: 'CUKOO',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '3',
        image: 'images/3.jpg',
        company: 'NUEVOSDAMAS',
        item_name: 'Women Red & White Printed A-Line Knee-Length Skirts',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '4',
        image: 'images/4.jpg',
        company: 'ADIDAS',
        item_name: 'Indian Cricket ODI Jersey',
        original_price: 999,
        current_price: 899,
        discount_percentage: 10,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '5',
        image: 'images/5.jpg',
        company: 'Roadster',
        item_name: 'Pure Cotton T-shirt',
        original_price: 1399,
        current_price: 489,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '6',
        image: 'images/6.jpg',
        company: 'Nike',
        item_name: 'Men ReactX Running Shoes',
        original_price: 14995,
        current_price: 12745,
        discount_percentage: 15,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.8,
            count: 2300,
        },
    },
    {
        id: '7',
        image: 'images/7.jpg',
        company: 'The Indian Garage Co',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '8',
        image: 'images/8.jpg',
        company: 'Nivea',
        item_name: 'Men Fresh Deodrant 150ml',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 5200,
        },
    },
    {
        id: '9',
        image: 'images/9.jpg',
        company: 'Roadster',
        item_name: 'Men Solid Bomber Jacket',
        original_price: 3999,
        current_price: 2199,
        discount_percentage: 45,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 4600,
        },
    },
    {
        id: '10',
        image: 'images/10.jpg',
        company: 'Snitch',
        item_name: 'Men Relaxed Fit Jeans',
        original_price: 3398,
        current_price: 1291,
        discount_percentage: 62,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 100,
        },
    },
    {
        id: '11',
        image: 'images/11.jpg',
        company: 'Fossil',
        item_name: 'Men Chronograph Watch',
        original_price: 12495,
        current_price: 6872,
        discount_percentage: 45,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.4,
            count: 4000,
        },
    },
    {
        id: '12',
        image: 'images/12.jpg',
        company: 'Red Tape',
        item_name: 'Women Walking Shoes',
        original_price: 6799,
        current_price: 1359,
        discount_percentage: 80,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '13',
        image: 'images/13.jpg',
        company: 'SOJANYA',
        item_name: 'Woven Design Straight Kurta',
        original_price: 2699,
        current_price: 998,
        discount_percentage: 63,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 704,
        },
    },
    {
        id: '14',
        image: 'images/14.jpg',
        company: 'HIGHLANDER',
        item_name: 'Men Solid Slim-Fit Track Pants',
        original_price: 949,
        current_price: 531,
        discount_percentage: 44,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 5100,
        },
    },
    {
        id: '15',
        image: 'images/15.jpg',
        company: 'KALINI',
        item_name: 'Kurta with Trousers & Dupatta',
        original_price: 3699,
        current_price: 850,
        discount_percentage: 80,
        return_period: 77,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4,
            count: 2300,
        },
    },
    {
        id: '16',
        image: 'images/16.jpg',
        company: 'Homefab India',
        item_name: 'Microfiber Bedsheet Set',
        original_price: 1199,
        current_price: 599,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.1,
            count: 700,
        },
    }
];