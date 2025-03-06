document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.intro-text p');

  
    texts.forEach(text => {
        text.style.opacity = '1';
        text.style.transform = 'translateX(0)';
        text.style.transition = 'none';
    });

    
    const animateTexts = () => {
        
        const randomOrder = Array.from(Array(texts.length).keys()).sort(() => Math.random() - 0.5);

        
        randomOrder.forEach((index, i) => {
            setTimeout(() => {
                texts[index].style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                texts[index].style.opacity = '0';
                texts[index].style.transform = 'translateZ(50px)'; 
            }, i * 500);
        });

        
        setTimeout(() => {
            randomOrder.forEach((index, i) => {
                setTimeout(() => {
                    texts[index].style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    texts[index].style.opacity = '1';
                    texts[index].style.transform = 'translateX(0)'; 
                }, i * 500);
            });
        }, texts.length * 500 + 1000);
    };

    
    animateTexts();

    
    setInterval(animateTexts, 5000);
});