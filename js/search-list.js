

let urlSearchingKey =  location.search.split('search-data=')[1]




const searchingListHeaderDesc = document.querySelector('.searching-list-header > h3')

const searchingList = document.querySelector('.searching-list')


// render sản phẩm searching
searchingRenderFunc = () => {
    let y = urlSearchingKey.toLowerCase();
    allProducts.forEach((productMatch) => {
        let x = productMatch.name.toLowerCase();

        searchingListHeaderDesc.innerHTML = `
        Kết quả tìm kiếm cho: "${urlSearchingKey}"
        `
        if ( _.includes(x, y) )  {

    
            let parentDiv = document.createElement('div')
            parentDiv.className = 'item-found col l-4'

            let priceOfProduct = formatter.format(productMatch.price)
            // idOfProduct = productMatch.id.
            let child = document.createElement('div')
            child.innerHTML = `
            <a title="${productMatch.name}" href="product-detail.html?id=${productMatch.id}">
                <div class="product-frame">
                    <img style="max-width: 100%" src="${productMatch.frontImage}" class="product-img" alt="">
                    
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${productMatch.name}</h3>
                    <p class="product-price">${priceOfProduct}</p>
    
                </div>
            </a>
            `
            parentDiv.append(child)
            searchingList.append(parentDiv)
        }

        
    })
}
searchingRenderFunc()



























