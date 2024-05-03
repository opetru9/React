$(document).ready(function () {
            $('.slider').slick({
                vertical:false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                dots:true,
                speed: 1000,

                responsive: [{
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }},
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                    
                }],
            })
        });
        