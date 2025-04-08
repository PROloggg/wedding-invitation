$(document).ready(function() {
    const container = $('.container');
    const heartPreloader = $('#heartPreloader');
    const musicPlayer = $('#weddingMusic')[0];
    
    // Предзагрузка музыки
    musicPlayer.load();
    
    // Обработчик клика по сердцу
    heartPreloader.click(function() {
        // Запускаем музыку
        musicPlayer.play().catch(e => console.log("Autoplay prevented:", e));
        
        // Анимация исчезновения сердца
        $('.heart').animate({
            fontSize: "200px",
            opacity: 0
        }, 800);
        
        $('.click-hint').fadeOut(500);
        
        // После анимации скрываем прелоадер и показываем галерею
        setTimeout(() => {
            heartPreloader.fadeOut(300, () => {
                container.fadeIn(500);
            });
        }, 800);
    });
    

});