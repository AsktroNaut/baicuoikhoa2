  // black - 1
// white - 2
// red - 3
// green - 4
// grey - 5
// pink - 6
// tan - 7
// yellow - 8


// so thu tu
// 1 - top, bottom, access
// 2 - tee, sweater, hood, 
// 3 - type
// 4 - color
// 5 - S M L size


const productsData = {
    topProducts: {
        tshirt: [
            {
                id: 11111,
                name: '1 Year Tee - Black',
                frontImage: "product-image/top/tshirt/11111f.jpg",
                backImage:"product-image/top/tshirt/11111b.jpg",
                size: 'S',
                color: 'Black',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11112,
                name: '1 Year Tee - Black',
                frontImage: "product-image/top/tshirt/11111f.jpg",
                backImage:"product-image/top/tshirt/11111b.jpg",
                size: 'M',
                color: 'Black',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11113,
                name: '1 Year Tee - Black',
                frontImage: "product-image/top/tshirt/11111f.jpg",
                backImage:"product-image/top/tshirt/11111b.jpg",
                size: 'L',
                color: 'Black',
                price: 180000,
                quantity: 50,
            },

            
            // mau 2
            {
                id: 11241,
                name: 'Bazic Tee v2.0 / Green',
                frontImage: "product-image/top/tshirt/11241f.jpg",
                backImage:"product-image/top/tshirt/11241b.jpg",
                size: 'S',
                color: 'Green',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11242,
                name: 'Bazic Tee v2.0 / Green',
                frontImage: "product-image/top/tshirt/11241f.jpg",
                backImage:"product-image/top/tshirt/11241b.jpg",
                size: 'M',
                color: 'Green',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11243,
                name: 'Bazic Tee v2.0 / Green',
                frontImage: "product-image/top/tshirt/11241f.jpg",
                backImage:"product-image/top/tshirt/11241b.jpg",
                size: 'L',
                color: 'Blue',
                price: 180000,
                quantity: 50,
            },

            {
                id: 11231,
                name: 'Bazic Tee v2.0 / Red Color',
                frontImage: "product-image/top/tshirt/11231f.jpg",
                backImage:"product-image/top/tshirt/11231b.jpg",
                size: 'S',
                color: 'Red',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11232,
                name: 'Bazic Tee v2.0 / Red Color',
                frontImage: "product-image/top/tshirt/11231f.jpg",
                backImage:"product-image/top/tshirt/11231b.jpg",
                size: 'M',
                color: 'Red',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11233,
                name: 'Bazic Tee v2.0 / Red Color',
                frontImage: "product-image/top/tshirt/11231f.jpg",
                backImage:"product-image/top/tshirt/11231b.jpg",
                size: 'L',
                color: 'Red',
                price: 180000,
                quantity: 50,
            },

            {
                id: 11251,
                name: 'Bazic Tee v2.0 / Grey Color',
                frontImage: "product-image/top/tshirt/11251f.jpg",
                backImage:"product-image/top/tshirt/11251b.jpg",
                size: 'S',
                color: 'Grey',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11252,
                name: 'Bazic Tee v2.0 / Grey Color',
                frontImage: "product-image/top/tshirt/11251f.jpg",
                backImage:"product-image/top/tshirt/11251b.jpg",
                size: 'M',
                color: 'Grey',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11253,
                name: 'Bazic Tee v2.0 / Grey Color',
                frontImage: "product-image/top/tshirt/11251f.jpg",
                backImage:"product-image/top/tshirt/11251b.jpg",
                size: 'L',
                color: 'Grey',
                price: 180000,
                quantity: 50,
            },

            {
                id: 11271,
                name: 'Bazic Tee v2.0 / Tan Color',
                frontImage: "product-image/top/tshirt/11271f.png",
                backImage:"product-image/top/tshirt/11271b.png",
                size: 'S',
                color: 'Tan',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11272,
                name: 'Bazic Tee v2.0 / Tan Color',
                frontImage: "product-image/top/tshirt/11271f.png",
                backImage:"product-image/top/tshirt/11271b.png",
                size: 'M',
                color: 'Tan',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11273,
                name: 'Bazic Tee v2.0 / Tan Color',
                frontImage: "product-image/top/tshirt/11271f.png",
                backImage:"product-image/top/tshirt/11271b.png",
                size: 'L',
                color: 'Tan',
                price: 180000,
                quantity: 50,
            },

            {
                id: 11291,
                name: 'Bazic Tee v2.0 / Blue Color',
                frontImage: "product-image/top/tshirt/11291f.png",
                backImage:"product-image/top/tshirt/11291b.png",
                size: 'S',
                color: 'Blue',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11292,
                name: 'Bazic Tee v2.0 / Blue Color',
                frontImage: "product-image/top/tshirt/11291f.png",
                backImage:"product-image/top/tshirt/11291b.png",
                size: 'M',
                color: 'Blue',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11293,
                name: 'Bazic Tee v2.0 / Blue Color',
                frontImage: "product-image/top/tshirt/11291f.png",
                backImage:"product-image/top/tshirt/11291b.png",
                size: 'L',
                color: 'Blue',
                price: 180000,
                quantity: 50,
            },
            // mau3
            {
                id: 11321,
                name: 'BIG LOGO PIXEL TEE - WHITE',
                frontImage: "product-image/top/tshirt/11321f.png",
                backImage:"product-image/top/tshirt/11321b.png",
                size: 'S',
                color: 'White',
                price: 140000,
                quantity: 50,
            },
            {
                id: 11322,
                name: 'BIG LOGO PIXEL TEE - WHITE',
                frontImage: "product-image/top/tshirt/11321f.png",
                backImage:"product-image/top/tshirt/11321b.png",
                size: 'M',
                color: 'White',
                price: 140000,
                quantity: 50,
            },
            {
                id: 11323,
                name: 'BIG LOGO PIXEL TEE - WHITE',
                frontImage: "product-image/top/tshirt/11321f.png",
                backImage:"product-image/top/tshirt/11321b.png",
                size: 'L',
                color: 'White',
                price: 140000,
                quantity: 50,
            },

            {
                id: 11311,
                name: 'BIG LOGO PIXEL TEE - Black',
                frontImage: "product-image/top/tshirt/11311f.png",
                backImage:"product-image/top/tshirt/11311b.jpg",
                size: 'S',
                color: 'Black',
                price: 140000,
                quantity: 50,
            },
            {
                id: 11312,
                name: 'BIG LOGO PIXEL TEE - Black',
                frontImage: "product-image/top/tshirt/11311f.png",
                backImage:"product-image/top/tshirt/11311b.jpg",
                size: 'M',
                color: 'Black',
                price: 140000,
                quantity: 50,
            },
            {
                id: 11313,
                name: 'BIG LOGO PIXEL TEE - Black',
                frontImage: "product-image/top/tshirt/11311f.png",
                backImage:"product-image/top/tshirt/11311b.jpg",
                size: 'L',
                color: 'Black',
                price: 140000,
                quantity: 50,
            },
            // mau4
            {
                id: 11421,
                name: 'Polo Signature / White Color',
                frontImage: "product-image/top/tshirt/11421f.jpg",
                backImage:"product-image/top/tshirt/11421b.jpg",
                size: 'S',
                color: 'White',
                price: 208000,
                quantity: 50,
            },
            {
                id: 11422,
                name: 'Polo Signature / White Color',
                frontImage: "product-image/top/tshirt/11421f.jpg",
                backImage:"product-image/top/tshirt/11421b.jpg",
                size: 'M',
                color: 'White',
                price: 208000,
                quantity: 50,
            },
            {
                id: 11423,
                name: 'Polo Signature / White Color',
                frontImage: "product-image/top/tshirt/11421f.jpg",
                backImage:"product-image/top/tshirt/11421b.jpg",
                size: 'L',
                color: 'White',
                price: 208000,
                quantity: 50,
            },

            {
                id: 11411,
                name: 'Polo Signature / Black Color',
                frontImage: "product-image/top/tshirt/11411f.jpg",
                backImage:"product-image/top/tshirt/11411b.jpg",
                size: 'S',
                color: 'Black',
                price: 208000,
                quantity: 50,
            },
            {
                id: 11412,
                name: 'Polo Signature / Black Color',
                frontImage: "product-image/top/tshirt/11411f.jpg",
                backImage:"product-image/top/tshirt/11411b.jpg",
                size: 'M',
                color: 'Black',
                price: 208000,
                quantity: 50,
            },
            {
                id: 11413,
                name: 'Polo Signature / Black Color',
                frontImage: "product-image/top/tshirt/11411f.jpg",
                backImage:"product-image/top/tshirt/11411b.jpg",
                size: 'L',
                color: 'Black',
                price: 208000,
                quantity: 50,
            },
            // mau5
            {
                id: 11551,
                name: 'Italics Polo / Grey color',
                frontImage: "product-image/top/tshirt/11551f.jpg",
                backImage:"product-image/top/tshirt/11551b.jpg",
                size: 'S',
                color: 'Grey',
                price: 208000,
                quantity: 50,
            },
            {
                id: 11552,
                name: 'Italics Polo / Grey color',
                frontImage: "product-image/top/tshirt/11551f.jpg",
                backImage:"product-image/top/tshirt/11551b.jpg",
                size: 'M',
                color: 'Grey',
                price: 208000,
                quantity: 50,
            },
            {
                id: 11553,
                name: 'Italics Polo / Grey color',
                frontImage: "product-image/top/tshirt/11551f.jpg",
                backImage:"product-image/top/tshirt/11551b.jpg",
                size: 'L',
                color: 'Grey',
                price: 208000,
                quantity: 50,
            },
            // mau6
            {
                id: 11621,
                name: 'BIG LOGO PIXEL TEE - WHITE',
                frontImage: "product-image/top/tshirt/11621f.png",
                backImage:"product-image/top/tshirt/11621b.png",
                size: 'S',
                color: 'White',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11622,
                name: 'BIG LOGO PIXEL TEE - WHITE',
                frontImage: "product-image/top/tshirt/11621f.png",
                backImage:"product-image/top/tshirt/11621b.png",
                size: 'M',
                color: 'White',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11623,
                name: 'BIG LOGO PIXEL TEE - WHITE',
                frontImage: "product-image/top/tshirt/11621f.png",
                backImage:"product-image/top/tshirt/11621b.png",
                size: 'L',
                color: 'White',
                price: 180000,
                quantity: 50,
            },

            {
                id: 11611,
                name: 'BIG LOGO PIXEL TEE - BLACK',
                frontImage: "product-image/top/tshirt/11611f.png",
                backImage:"product-image/top/tshirt/11611b.jpg",
                size: 'S',
                color: 'Black',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11612,
                name: 'BIG LOGO PIXEL TEE - BLACK',
                frontImage: "product-image/top/tshirt/11611f.png",
                backImage:"product-image/top/tshirt/11611b.jpg",
                size: 'M',
                color: 'Black',
                price: 180000,
                quantity: 50,
            },
            {
                id: 11613,
                name: 'BIG LOGO PIXEL TEE - BLACK',
                frontImage: "product-image/top/tshirt/11611f.png",
                backImage:"product-image/top/tshirt/11611b.jpg",
                size: 'L',
                color: 'Black',
                price: 180000,
                quantity: 50,
            },






        ],

        sweater: [
            // mẫu1
            {
                id: 12171,
                name: 'Thunder Long Tee / Nỉ chân cua',
                frontImage: "product-image/top/sweater/12171f.jpg",
                backImage:"product-image/top/sweater/12171b.jpg",
                size: 'S',
                color: 'Tan',
                price: 265000,
                quantity: 50,
            },
            {
                id: 12172,
                name: 'Thunder Long Tee / Nỉ chân cua',
                frontImage: "product-image/top/sweater/12171f.jpg",
                backImage:"product-image/top/sweater/12171b.jpg",
                size: 'M',
                color: 'Tan',
                price: 265000,
                quantity: 50,
            },
            {
                id: 12173,
                name: 'Thunder Long Tee / Nỉ chân cua',
                frontImage: "product-image/top/sweater/12171f.jpg",
                backImage:"product-image/top/sweater/12171b.jpg",
                size: 'L',
                color: 'Tan',
                price: 265000,
                quantity: 50,
            },

            {
                id: 12111,
                name: 'Thunder Long Tee / Nỉ chân cua',
                frontImage: "product-image/top/sweater/12111f.jpg",
                backImage:"product-image/top/sweater/12111b.jpg",
                size: 'S',
                color: 'Black',
                price: 265000,
                quantity: 50,
            },
            {
                id: 12112,
                name: 'Thunder Long Tee / Nỉ chân cua',
                frontImage: "product-image/top/sweater/12111f.jpg",
                backImage:"product-image/top/sweater/12111b.jpg",
                size: 'M',
                color: 'Black',
                price: 265000,
                quantity: 50,
            },
            {
                id: 12113,
                name: 'Thunder Long Tee / Nỉ chân cua',
                frontImage: "product-image/top/sweater/12111f.jpg",
                backImage:"product-image/top/sweater/12111b.jpg",
                size: 'L',
                color: 'Black',
                price: 265000,
                quantity: 50,
            },
            // mẫu 2
            {
                id: 12281,
                name: 'Error Design / Nỉ Chân Cua',
                frontImage: "product-image/top/sweater/12281f.jpg",
                backImage:"product-image/top/sweater/12281b.jpg",
                size: 'S',
                color: 'Yellow',
                price: 235000,
                quantity: 50,
            },
            {
                id: 12282,
                name: 'Error Design / Nỉ Chân Cua',
                frontImage: "product-image/top/sweater/12281f.jpg",
                backImage:"product-image/top/sweater/12281b.jpg",
                size: 'M',
                color: 'Yellow',
                price: 235000,
                quantity: 50,
            },
            {
                id: 12283,
                name: 'Error Design / Nỉ Chân Cua',
                frontImage: "product-image/top/sweater/12281f.jpg",
                backImage:"product-image/top/sweater/12281b.jpg",
                size: 'L',
                color: 'Yellow',
                price: 235000,
                quantity: 50,
            },

        ],

        hoodie: [
            // mẫu 1
            {
                id: 13121,
                name: 'SIGNATURE HOODIE',
                frontImage: "product-image/top/hoodie/13121f.jpg",
                backImage:"product-image/top/hoodie/13121b.jpg",
                size: 'S',
                color: 'White',
                price: 275000,
                quantity: 50,
            },
            {
                id: 13122,
                name: 'SIGNATURE HOODIE',
                frontImage: "product-image/top/hoodie/13121f.jpg",
                backImage:"product-image/top/hoodie/13121b.jpg",
                size: 'M',
                color: 'White',
                price: 275000,
                quantity: 50,
            },
            {
                id: 13123,
                name: 'SIGNATURE HOODIE',
                frontImage: "product-image/top/hoodie/13121f.jpg",
                backImage:"product-image/top/hoodie/13121b.jpg",
                size: 'L',
                color: 'White',
                price: 275000,
                quantity: 50,
            },
            // mẫu 2
            {
                id: 13291,
                name: 'Mini Signature Hoodie / Blue Color',
                frontImage: "product-image/top/hoodie/13291f.jpg",
                backImage:"product-image/top/hoodie/13291b.jpg",
                size: 'S',
                color: 'Blue',
                price: 340000,
                quantity: 50,
            },
            {
                id: 13292,
                name: 'Mini Signature Hoodie / Blue Color',
                frontImage: "product-image/top/hoodie/13291f.jpg",
                backImage:"product-image/top/hoodie/13291b.jpg",
                size: 'M',
                color: 'Blue',
                price: 340000,
                quantity: 50,
            },
            {
                id: 13293,
                name: 'Mini Signature Hoodie / Blue Color',
                frontImage: "product-image/top/hoodie/13291f.jpg",
                backImage:"product-image/top/hoodie/13291b.jpg",
                size: 'L',
                color: 'Blue',
                price: 340000,
                quantity: 50,
            },

            {
                id: 13241,
                name: 'Mini Signature Hoodie / Green Color',
                frontImage: "product-image/top/hoodie/13241f.jpg",
                backImage:"product-image/top/hoodie/13241b.jpg",
                size: 'S',
                color: 'Green',
                price: 340000,
                quantity: 50,
            },
            {
                id: 13242,
                name: 'Mini Signature Hoodie / Green Color',
                frontImage: "product-image/top/hoodie/13241f.jpg",
                backImage:"product-image/top/hoodie/13241b.jpg",
                size: 'M',
                color: 'Green',
                price: 340000,
                quantity: 50,
            },
            {
                id: 13243,
                name: 'Mini Signature Hoodie / Green Color',
                frontImage: "product-image/top/hoodie/13241f.jpg",
                backImage:"product-image/top/hoodie/13241b.jpg",
                size: 'L',
                color: 'Green',
                price: 340000,
                quantity: 50,
            },

            {
                id: 13251,
                name: 'Mini Signature Hoodie / Grey Color',
                frontImage: "product-image/top/hoodie/13251f.jpg",
                backImage:"product-image/top/hoodie/13251b.jpg",
                size: 'S',
                color: 'Grey',
                price: 340000,
                quantity: 50,
            },
            {
                id: 13252,
                name: 'Mini Signature Hoodie / Grey Color',
                frontImage: "product-image/top/hoodie/13251f.jpg",
                backImage:"product-image/top/hoodie/13251b.jpg",
                size: 'M',
                color: 'Grey',
                price: 340000,
                quantity: 50,
            },
            {
                id: 13253,
                name: 'Mini Signature Hoodie / Grey Color',
                frontImage: "product-image/top/hoodie/13251f.jpg",
                backImage:"product-image/top/hoodie/13251b.jpg",
                size: 'L',
                color: 'Grey',
                price: 340000,
                quantity: 50,
            },
            // mẫu 3
            {
                id: 13311,
                name: 'Wolf Face / Black Hoodie',
                frontImage: "product-image/top/hoodie/13311f.jpg",
                backImage:"product-image/top/hoodie/13311b.jpg",
                size: 'S',
                color: 'Black',
                price: 275000,
                quantity: 50,
            },
            {
                id: 13312,
                name: 'Wolf Face / Black Hoodie',
                frontImage: "product-image/top/hoodie/13311f.jpg",
                backImage:"product-image/top/hoodie/13311b.jpg",
                size: 'M',
                color: 'Black',
                price: 275000,
                quantity: 50,
            },
            {
                id: 13313,
                name: 'Wolf Face / Black Hoodie',
                frontImage: "product-image/top/hoodie/13311f.jpg",
                backImage:"product-image/top/hoodie/13311b.jpg",
                size: 'L',
                color: 'Black',
                price: 275000,
                quantity: 50,
            },

            {
                id: 13391,
                name: 'Wolf Face / Blue Hoodie',
                frontImage: "product-image/top/hoodie/13391f.jpg",
                backImage:"product-image/top/hoodie/13391b.jpg",
                size: 'S',
                color: 'Blue',
                price: 275000,
                quantity: 50,
            },
            {
                id: 13392,
                name: 'Wolf Face / Blue Hoodie',
                frontImage: "product-image/top/hoodie/13391f.jpg",
                backImage:"product-image/top/hoodie/13391b.jpg",
                size: 'M',
                color: 'Blue',
                price: 275000,
                quantity: 50,
            },
            {
                id: 13393,
                name: 'Wolf Face / Blue Hoodie',
                frontImage: "product-image/top/hoodie/13391f.jpg",
                backImage:"product-image/top/hoodie/13391b.jpg",
                size: 'L',
                color: 'Blue',
                price: 275000,
                quantity: 50,
            },
            // mau4
            {
                id: 13421,
                name: 'Hoodie Zip Snow / White',
                frontImage: "product-image/top/hoodie/13421f.jpg",
                backImage:"product-image/top/hoodie/13421b.jpg",
                size: 'S',
                color: 'White',
                price: 295000,
                quantity: 50,
            },
            {
                id: 13422,
                name: 'Hoodie Zip Snow / White',
                frontImage: "product-image/top/hoodie/13421f.jpg",
                backImage:"product-image/top/hoodie/13421b.jpg",
                size: 'M',
                color: 'White',
                price: 295000,
                quantity: 50,
            },
            {
                id: 13423,
                name: 'Hoodie Zip Snow / White',
                frontImage: "product-image/top/hoodie/13421f.jpg",
                backImage:"product-image/top/hoodie/13421b.jpg",
                size: 'L',
                color: 'White',
                price: 295000,
                quantity: 50,
            },
            // mau5
            {
                id: 13521,
                name: 'Hoodie Zip Rainbow - White',
                frontImage: "product-image/top/hoodie/13521f.jpg",
                backImage:"product-image/top/hoodie/13521b.jpg",
                size: 'S',
                color: 'White',
                price: 295000,
                quantity: 50,
            },
            {
                id: 13522,
                name: 'Hoodie Zip Rainbow - White',
                frontImage: "product-image/top/hoodie/13521f.jpg",
                backImage:"product-image/top/hoodie/13521b.jpg",
                size: 'M',
                color: 'White',
                price: 295000,
                quantity: 50,
            },
            {
                id: 13523,
                name: 'Hoodie Zip Rainbow - White',
                frontImage: "product-image/top/hoodie/13521f.jpg",
                backImage:"product-image/top/hoodie/13521b.jpg",
                size: 'L',
                color: 'White',
                price: 295000,
                quantity: 50,
            },
            // mau6
            {
                id: 13651,
                name: 'Hoodie Zip Graffiti / Grey Color',
                frontImage: "product-image/top/hoodie/13651f.jpg",
                backImage:"product-image/top/hoodie/13651b.jpg",
                size: 'S',
                color: 'Grey',
                price: 265000,
                quantity: 50,
            },
            {
                id: 13652,
                name: 'Hoodie Zip Graffiti / Grey Color',
                frontImage: "product-image/top/hoodie/13651f.jpg",
                backImage:"product-image/top/hoodie/13651b.jpg",
                size: 'M',
                color: 'Grey',
                price: 265000,
                quantity: 50,
            },
            {
                id: 13653,
                name: 'Hoodie Zip Graffiti / Grey Color',
                frontImage: "product-image/top/hoodie/13651f.jpg",
                backImage:"product-image/top/hoodie/13651b.jpg",
                size: 'L',
                color: 'Grey',
                price: 265000,
                quantity: 50,
            },
        ]
    },

    bottomProducts: {
        short: [
            // mẫu1
            {
                id: 21111,
                name: 'Italics Short / Black Color',
                frontImage: "product-image/bottom/short/21111f.jpg",
                backImage:"product-image/bottom/short/21111b.jpg",
                size: 'S',
                color: 'Black',
                price: 190000,
                quantity: 50,
            },
            
            {
                id: 21121,
                name: 'Italics Short / White Color',
                frontImage: "product-image/bottom/short/21121f.jpg",
                backImage:"product-image/bottom/short/21121b.jpg",
                size: 'S',
                color: 'White',
                price: 190000,
                quantity: 50,
            },

            {
                id: 21151,
                name: 'Italics Short / Grey Color',
                frontImage: "product-image/bottom/short/21151f.jpg",
                backImage:"product-image/bottom/short/21151b.jpg",
                size: 'S',
                color: 'Grey',
                price: 190000,
                quantity: 50,
            },
            // mẫu2
            {
                id: 21211,
                name: 'Signature Short - Black',
                frontImage: "product-image/bottom/short/21211f.jpg",
                backImage:"product-image/bottom/short/21211b.jpg",
                size: 'S',
                color: 'Black',
                price: 190000,
                quantity: 50,
            },

            {
                id: 21261,
                name: 'Signature Short - Pink',
                frontImage: "product-image/bottom/short/21261f.jpg",
                backImage:"product-image/bottom/short/21261b.jpg",
                size: 'S',
                color: 'Pink',
                price: 190000,
                quantity: 50,
            },

        ],

        pants: [
            // mẫu 1
            {
                id: 22111,
                name: 'THE TOBACO PANTS - BLACK',
                frontImage: "product-image/bottom/pants/22111f.jpg",
                backImage:"product-image/bottom/pants/22111b.jpg",
                size: 'S',
                color: 'Black',
                price: 275000,
                quantity: 50,
            },
            {
                id: 22112,
                name: 'THE TOBACO PANTS - BLACK',
                frontImage: "product-image/bottom/pants/22111f.jpg",
                backImage:"product-image/bottom/pants/22111b.jpg",
                size: 'M',
                color: 'Black',
                price: 275000,
                quantity: 50,
            },
            {
                id: 22113,
                name: 'THE TOBACO PANTS - BLACK',
                frontImage: "product-image/bottom/pants/22111f.jpg",
                backImage:"product-image/bottom/pants/22111b.jpg",
                size: 'L',
                color: 'Black',
                price: 275000,
                quantity: 50,
            },

            {
                id: 22171,
                name: 'THE TOBACO PANTS - TAN',
                frontImage: "product-image/bottom/pants/22171f.jpg",
                backImage:"product-image/bottom/pants/22171b.jpg",
                size: 'S',
                color: 'Tan',
                price: 275000,
                quantity: 50,
            },
            {
                id: 22172,
                name: 'THE TOBACO PANTS - TAN',
                frontImage: "product-image/bottom/pants/22171f.jpg",
                backImage:"product-image/bottom/pants/22171b.jpg",
                size: 'M',
                color: 'Tan',
                price: 275000,
                quantity: 50,
            },
            {
                id: 22173,
                name: 'THE TOBACO PANTS - TAN',
                frontImage: "product-image/bottom/pants/22171f.jpg",
                backImage:"product-image/bottom/pants/22171b.jpg",
                size: 'L',
                color: 'Tan',
                price: 275000,
                quantity: 50,
            },

            {
                id: 22121,
                name: 'THE TOBACO PANTS - White',
                frontImage: "product-image/bottom/pants/22121f.jpg",
                backImage:"product-image/bottom/pants/22121b.jpg",
                size: 'S',
                color: 'White',
                price: 275000,
                quantity: 50,
            },
            {
                id: 22122,
                name: 'THE TOBACO PANTS - White',
                frontImage: "product-image/bottom/pants/22121f.jpg",
                backImage:"product-image/bottom/pants/22121b.jpg",
                size: 'M',
                color: 'White',
                price: 275000,
                quantity: 50,
            },
            {
                id: 22123,
                name: 'THE TOBACO PANTS - White',
                frontImage: "product-image/bottom/pants/22121f.jpg",
                backImage:"product-image/bottom/pants/22121b.jpg",
                size: 'L',
                color: 'White',
                price: 275000,
                quantity: 50,
            },
        ],
    },

    accessoryProducts: {
        
        bag: [
            // mau1
            {
                id: 31111,
                name: 'TOTE 1',
                frontImage: "product-image/accessories/bag/31111f.jpg",
                backImage:"product-image/accessories/bag/31111b.jpg",
                size: 'S',
                color: 'Black',
                price: 100000,
                quantity: 50,
            },
            // mau2
            {
                id: 31211,
                name: 'TOTE 2',
                frontImage: "product-image/accessories/bag/31211f.jpg",
                backImage:"product-image/accessories/bag/31211b.jpg",
                size: 'S',
                color: 'Black',
                price: 100000,
                quantity: 50,
            },
            // mau3
            {
                id: 31321,
                name: 'TOTE 3',
                frontImage: "product-image/accessories/bag/31211f.jpg",
                backImage:"product-image/accessories/bag/31211b.jpg",
                size: 'S',
                color: 'White',
                price: 100000,
                quantity: 50,
            },
            // mau4
            {
                id: 31421,
                name: 'TOTE 4',
                frontImage: "product-image/accessories/bag/31421f.jpg",
                backImage:"product-image/accessories/bag/31421b.jpg",
                size: 'S',
                color: 'White',
                price: 100000,
                quantity: 50,
            },
        ]
    }
}




// Tất cả sản phẩm


let tShirtList = [];
productsData.topProducts.tshirt.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!tShirtList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        
        tempProduct.id = temporaryId;
        tShirtList.push(tempProduct);
    }
})
console.log(tShirtList);

let sweaterList = [];
productsData.topProducts.sweater.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!sweaterList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        
        tempProduct.id = temporaryId;
        sweaterList.push(tempProduct);
    }
})
console.log(sweaterList);

let hoodieList = [];
productsData.topProducts.hoodie.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!hoodieList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        
        tempProduct.id = temporaryId;
        hoodieList.push(tempProduct);
    }
})
console.log(hoodieList);

let shortList = [];
productsData.bottomProducts.short.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!shortList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        
        tempProduct.id = temporaryId;
        shortList.push(tempProduct);
    }
})
console.log(shortList);

let pantsList = [];
productsData.bottomProducts.pants.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!pantsList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        
        tempProduct.id = temporaryId;
        pantsList.push(tempProduct);
    }
})
console.log(pantsList);

let bagList = [];
productsData.accessoryProducts.bag.forEach(i=>{
    let temporaryId = i.id.toString().slice(0,4);
    if(!bagList.find(i=>i.id==temporaryId)){
        
        let tempProduct = JSON.parse(JSON.stringify(i));
        
        tempProduct.id = temporaryId;
        bagList.push(tempProduct);
    }
})
console.log(bagList);



const allProducts = [];
tShirtList.forEach(i=>{
    allProducts.push(i)
})
sweaterList.forEach(i=>{
    allProducts.push(i)
})
hoodieList.forEach(i=>{
    allProducts.push(i)
})
shortList.forEach(i=>{
    allProducts.push(i)
})
pantsList.forEach(i=>{
    allProducts.push(i)
})
bagList.forEach(i=>{
    allProducts.push(i)
})
console.log(allProducts);











































































