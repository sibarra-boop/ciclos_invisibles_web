let links = document.querySelectorAll('.chart-link');
let container = document.getElementById('chart');
let containerRect;
function animate() {
    requestAnimationFrame(animate);
    updatePositionLinks();
}

function updatePositionLinks() {
    containerRect = container.getBoundingClientRect();
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let id = link.getAttribute('id').replace('-link', '');
        updatePositionLink(link, id);
    }
}

function updatePositionLink(link, id) {
    let circle = document.getElementById(id);
    let rect = circle.getBoundingClientRect();
    let left = rect.left - containerRect.left;
    let top = rect.top - containerRect.top;
    link.style.left =  Math.round(left) + 'px';
    link.style.top =  Math.round(top) + 'px';
}

animate();