class StickyNavigation {

    constructor() {
        let tabContainer = document.querySelector('.et-hero-tabs-container');
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = tabContainer.offsetHeight;
        let self = this;
        $('.et-hero-tab').click(function() {
            self.onTabClick(Event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }

    onTabClick(event, element) {
        console.log('ontabclick');
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        console.log('on scroll');
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        console.log('on resize');
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        console.log('Check tab container height');
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        if ($(window).scrollTop() >= offset) {
            $('.et-hero-tabs-container').addClass('top');
        } else {
            $('.et-hero-tabs-container').removeClass('top');
        }
    }

    findCurrentTabSelector(element) {
        console.log('find current tab selector');
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        console.log('set slider css');
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }
}

new StickyNavigation();


jQuery(document).ready(function($) {

    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);


        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });

});