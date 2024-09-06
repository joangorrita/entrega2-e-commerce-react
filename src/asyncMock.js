const products = [ 
    {
    id: '1',
    name: 'Iphone 12',
    price: 1000,
    category: 'celular',
    ing: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
    stock: 25,
    description: 'Descripcion de Iphone 12'
    },
    { id:`2`, name: `Samsung S21`, price: 800, category: `Celular`, img:`https://samsungar.vtexassets.com/arquivos/ids/191579-1200-auto?width=1200&height=auto&aspect=true`},
    { id:`3`, name: `Ipad 9va generacion`, price: 1200, category: `Celular`, img:`https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111898_sp849-ipad-9gen-480.png`}
]
export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id === productId))
        }, 500)
    })
}
