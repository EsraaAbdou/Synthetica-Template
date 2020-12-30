
$(document).ready(function(){
    const animationTime = 900;
    const animattionAtrr = {"top": "0", "opacity": "1"};
    $(window).scroll(function() {
        // bars percentage animation
        $('.per-bar').each(function(index, value) {
            let oTopbar = $(this).offset().top - window.innerHeight;
            if ($(window).scrollTop() > oTopbar) {
                $(this).css("animationName", "bars" + index);
            }
        });
        // stats numbers animation
        let oTopStats = $('#stat-container').offset().top - window.innerHeight;
        if ($(window).scrollTop() > oTopStats) {
            $('.single h3').each(function() {
                $(this).css('animation', 'counter 5s ease-in-out');
                let $this = $(this), countTo = $this.attr('data-count');
                $({countNum: $this.text()}).animate({countNum: countTo}, 
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    }
                );
            });
        }
        // free trail up animation
        let oToptrail = $('#trail_id').offset().top - window.innerHeight;
        if ($(window).scrollTop() > oToptrail) {
            $(".bg-geo p").animate(animattionAtrr, animationTime);
            $(".bg-geo button").animate(animattionAtrr, animationTime);
        }
        // freebies images fade in
        $('.free-col').each(function(){
            let oTopfree = $(this).offset().top - window.innerHeight + 200;
            if ($(window).scrollTop() > oTopfree) {
                $(this).animate(animattionAtrr, animationTime);
            }
        });
    });
    $(".head-content h1").animate(animattionAtrr, animationTime, function(){
        $(".head-content button").animate(animattionAtrr, animationTime, function(){
            $(".head-content hr").animate(animattionAtrr, animationTime);
            $(".head-content p").animate(animattionAtrr, animationTime);
        });
    });
});



