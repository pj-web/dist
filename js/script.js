

jQuery(function() {
    $('.hero__items').slick({
        responsive: [
            {
            breakpoint: 2500,
            settings: 'unslick'
            },
            {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                prevArrow: '<svg class="hero__items-arrow-prev"><use xlink:href="icons/icons.svg#arrow-left"></use></svg>',
                nextArrow: '<svg class="hero__items-arrow-next"><use xlink:href="icons/icons.svg#arrow-right"></use></svg>'
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                prevArrow: '<svg class="hero__items-arrow-prev"><use xlink:href="icons/icons.svg#arrow-left"></use></svg>',
                nextArrow: '<svg class="hero__items-arrow-next"><use xlink:href="icons/icons.svg#arrow-right"></use></svg>'
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.accordion__item-title').on('click', function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.accordion__item-title').not(this).removeClass('in').next().slideUp();
    });

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
            tallestcolumn = currentHeight;
            }
        });
            columns.height(tallestcolumn);
        }

        setEqualHeight($(".wrapper > section"));
});
