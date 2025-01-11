

document.addEventListener('DOMContentLoaded',()=>{
    document.title = 'Oyetola A_A_Hamide'
    const Ratio = 0.1;
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: Ratio,
    };
    
    const callback = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > Ratio) {
                entry.target.classList.add('reveal-animate1');
                entry.target.classList.add('reveal-animate3');
                entry.target.classList.add('reveal-animate2');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    const classesToObserve = ['animate-1' ,'animate-2','animate-3' ,'animate-4'];



    classesToObserve.forEach(className => {
        document.querySelectorAll(`.${className}`).forEach(element => {
            observer.observe(element);
        });
    });
})
