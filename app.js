//spandaki id özelliğini atama
const text = document.querySelector('#text')
//butındaki class özelliğini atama
const btn = document.querySelector('.btn')

//rastgele hexadecimal kod üretmesi için oluşturulan dizi
const hexaCode = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//rastgele renk üretmesi için oluşturulan fonksiyon
const randomColor = () => {
    let hexCode = "#"

    for(let i = 0; i < 6; i++)  {
        hexCode += hexaCode[Math.floor(Math.random() * hexaCode.length)]
    }
    return hexCode
}

//butona tıklandığında arkaplan renginin değişmesi ve renk kodunu yazması için oluşturulan fonksiyon
btn.addEventListener('click',() => {
    const colorCode = randomColor()
    text.innerText = colorCode
    document.body.style.backgroundColor = colorCode
})