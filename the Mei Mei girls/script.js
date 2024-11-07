// The spread operator will turn all items into an array
const stickySections = [...document.querySelectorAll('.sticky_wrap')]
// console.log(stickySections);

let images = []

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.horizontal_scroll').appendChild(image)
    })
})

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i])
    }
})

function transform(section) {

    // This will get the Y distance from top
    const offsetTop = section.parentElement.offsetTop;
    // console.log(offsetTop);

    // This grabs each scroll section
    const scrollSection = section.querySelector('.horizontal_scroll')

    // This works out the percentage of the screen and converts it to a VW value
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

    // If it is less than 0, don't transform
    // Else if the percentage is greater than 300, remain at 300
    // Else transform
    percentage = percentage < 0 ? 0 : percentage > 500 ? 500 : percentage;
    // Using 400vw as the original class goes too 500vw, but if it goes to the full 500vw it will overflow

    // Viewport height is then converted to the viewport width
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
    // You could use translate( vw, 0) here as well
}
