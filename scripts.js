var list_img = document.images
var link_img = []
for (let index = 4; index < list_img.length ; index++) {
    link_img.push(list_img[index].src)
}
console.log(link_img)
