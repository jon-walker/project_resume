$(document).ready(function () {

    // TOOLTIPS
    $('.tooltip').tooltipster({
        theme: 'tooltipster-shadow'
    });

    // TEXT ANIMATION EFFECTS ON H1
    $(function () {
        $('.tlt').textillate();
    });

    // CODING SKILLS FILTER
    $('#filter-coding').focus(
        function () {
            $('.coding').toggleClass('show-skills');
        }
    );

    $('#filter-coding').blur(
        function () {
            $('.coding').toggleClass('show-skills');
        }
    );

    // GRAPHICS SKILLS FILTER
    $('#filter-graphics').focus(
        function () {
            $('.graphics').toggleClass('show-skills');
        }
    );

    $('#filter-graphics').blur(
        function () {
            $('.graphics').toggleClass('show-skills');
        }
    );

    // MARKETING SKILLS FILTER
    $('#filter-marketing').focus(
        function () {
            $('.marketing').toggleClass('show-skills');
        }
    );

    $('#filter-marketing').blur(
        function () {
            $('.marketing').toggleClass('show-skills');
        }
    );
    // parent().next('ul').children('.coding').
    // removeClass('hide-skills').addClass('show-skills');
});
