


let urlProductId =  location.search.split('id=')[1]
console.log(urlProductId);

//hàm lấy thông tin của sản phẩm hiện tại
const getProductInfomations = () => {
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id === urlProductId) {
            return allProducts[i]
        }
}}

let currentProductInfomations = getProductInfomations()



const productRenderContainer = document.createElement('div')
productRenderContainer.classList.add('row')



productRenderContainer.innerHTML = `
    <div class="product-slide col l-5">
        <img class="product-img" src="${currentProductInfomations.frontImage}" alt="">
        <img class="product-img-back" src="${currentProductInfomations.backImage}" alt="">
        
    </div>
    <div class="product-infomation col l-7 underline">
        <div class="product-title">
            <h1>${currentProductInfomations.name}</h1>
        </div>

        <span style="color:rgb(122, 122, 122)" class="product-id">Mã sản phẩm: ${currentProductInfomations.id}</span>
        <div class="pro-price">
            <h3>${currentProductInfomations.price}đ</h3>
        </div>
        <form id="add-item-form" action="">
            <div class="variant-swatch">
                <h4>Chọn size</h4>
                <div class="select-swatch">
                    <div data-value="S">
                        <input id="swatch-0-s" type="radio" name="checkbox" value="S" checked="checked" >
                        <label for="swatch-0-s">S</label>
                    </div>
                    <div data-value="M">
                        <input id="swatch-0-m" type="radio" name="checkbox" value="M" >
                        <label for="swatch-0-m">M</label>
                    </div>
                    <div data-value="L">
                        <input id="swatch-0-l" type="radio" name="checkbox" value="L">
                        <label for="swatch-0-l">L</label>
                    </div>
                </div>
            </div>

            <div class="quantity-area row section">
                <input id="reduce-quantity-btn" type='button' value='-' class="change-quantity-btn"/>
                <input id='quantity' min='1' name='quantity' type='text' value='1' />
                <input id="raise-quantity-btn"  type='button' value='+' class="change-quantity-btn"/>


            </div>

            <div class="underline">
                <button id="add-product-to-cart" class=" hero-btn-full" type="submit">THÊM VÀO GIỎ</button>
                <button id="add-product-to-cart" class=" hero-btn-full" type="submit">MUA HÀNG</button>
            </div>
            

        </form>

        <div class="description-section section">
            <h3>Mô tả</h3>
            <ul>
                <li>- Gồm 3 size: S / M / L </li>
                <li><b>- Thông số áo: S : Dài 69 Rộng 52.5 | M : Dài 73 Rộng 55 | L: Dài : 76.5 Rộng: 57.5</b></li>
                <li>- Chất liệu vải :100% Cotton '' Chất lượng vải đánh dấu sự ra đời của Nowsaigon''</li>
                <li>- Công nghệ in: In lụa cao cấp, bảo quản tốt khi giặt máy , không bong tróc phai màu</li>
                <li>- Nowsaigon xuất hiện mang đến làn gió mới, xuất hiện từ đầu năm 2022 đầy biến động nhưng những gì Nowsaigon thực hiện đem tới một chất lượng và giá thành tốt nhất đến cho các bạn nha.</li>
            </ul>
        </div>
    
    </div>
`

const productDetailSection = document.querySelector('.product-detail')


productDetailSection.append(productRenderContainer)






































































































































