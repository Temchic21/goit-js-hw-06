const categories = document.querySelectorAll('.item');
console.log("Numder of Categories:" , categories.length)
categories.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if(element.tagName === 'H2') {
            console.log('Category:', element.textContent);
        }
    });
    group.forEach(element => {
        if(element.tagName === 'UL') {
            console.log('Elements:' , element.children.length);
        }
    });
})

