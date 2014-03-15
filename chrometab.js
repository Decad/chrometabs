(function($){

    $('.tab').on('click', function(){

        var $this = $(this),
            $pane = $this.data('target');

        $('.tab').add('.tab-pane').removeClass('active')
        $this.add($pane).addClass('active')

    })

})(jQuery)