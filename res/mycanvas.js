const canvas = document.querySelector('.__canvas');
const c = canvas.getContext('2d');


// for filter canvas click
canvas.addEventListener("click", function (event) {
    const elementsBelowCanvas = document.elementsFromPoint(event.clientX, event.clientY);
    const clickableElements = elementsBelowCanvas.filter((element) => {
        return element !== canvas;
    });

    if (clickableElements.length > 0) {
        clickableElements[0].click();

    }

});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const particlesArray = [];
let hue = 0;

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
    for (let i = 0; i < 1; i++) {
        particlesArray.push(new Particle())
    }

})

canvas.addEventListener('click', function (e) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 1; i++) {
        particlesArray.push(new Particle())
    }
})



class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        // this.x = canvas.width / 2;
        // this.y = canvas.height / 2;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%';
    }



    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;

    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
    }
}



function callBackParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        //code extra
        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                c.beginPath();
                c.strokeStyle = particlesArray[i].color;
                c.lineWidth = 0.5;
                c.moveTo(particlesArray[i].x, particlesArray[i].y)
                c.lineTo(particlesArray[j].x, particlesArray[j].y)
                c.stroke();
                c.closePath();
            }
        }

        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }

    }
}



function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    // c.fillStyle = "rgba(0, 0, 0, 1)";
    // c.fillRect(0, 0, canvas.width, canvas.height)
    callBackParticles();
    hue += 0.5;
    requestAnimationFrame(animate);
}

animate()