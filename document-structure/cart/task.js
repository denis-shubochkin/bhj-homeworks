

let products = document.getElementsByClassName('product');
let cart = document.querySelector('.cart__products');
let cartP = document.getElementsByClassName('cart__product');
let cartCount = 0;
let cartId = [];


for (let i=0; i<products.length;i++) 
{
    //обработка увеличения товаров в корзине
    products[i].querySelector('.product__quantity-control_inc').addEventListener('click',(event) =>
        {
            products[i].querySelector('.product__quantity-value').textContent = Number(products[i].querySelector('.product__quantity-value').textContent) + 1;
        }
    );
    //обработка уменьшения товаров в корзине
    products[i].querySelector('.product__quantity-control_dec').addEventListener('click',(event) =>
    {
        if (Number(products[i].querySelector('.product__quantity-value').textContent) === 1) {return;}
        else 
        {
            products[i].querySelector('.product__quantity-value').textContent = Number(products[i].querySelector('.product__quantity-value').textContent) - 1;
        }
    });
    //обрабокта добавления в корзину

    products[i].querySelector('.product__add').addEventListener('click', (event) =>
    {
        cartP = cart.getElementsByClassName('cart__product');
        if(cartCount>0)
        {
        if(cartId.find((e) => 
            {
                if(e===products[i].dataset.id)
                {
                    return true;
                }
                else return false;
            }   
        ))
        {
            for (let j=0;j<cartP.length;j++)
            {
                if(cartP[j].dataset.id===products[i].dataset.id)
                {
                    cartP[j].querySelector('.cart__product-count').textContent = Number(cartP[j].querySelector('.cart__product-count').textContent) + Number(products[i].querySelector('.product__quantity-value').textContent);
                    return;
                }
        }
        }
        }

        cart.insertAdjacentHTML('beforeEnd',
        `<div class="cart__product" data-id="${products[i].dataset.id}">
                <img class="cart__product-image" src="${products[i].querySelector('.product__image').src}">
                <div class="cart__product-count">${products[i].querySelector('.product__quantity-value').textContent}</div>
            </div>`
            )
            cartId.push(products[i].dataset.id);
            cartCount++;
    }
    )


}


