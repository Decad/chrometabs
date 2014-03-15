;(function($){
    $.fn.extend({
        chrometab: function(options) {

            this.defaultOptions = {};
            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {
                var $tabContainer = $(this),
                    $tabs = $tabContainer.find('.tab'),
                    mouseDown = false,
                    draggedTab = null;

                $tabs.on('mousedown', function(e){
                    var $this = $(this),
                        $pane = $this.data('target');

                    $('.tab').add('.tab-pane').removeClass('active')
                    $this.add($pane).addClass('active')

                    mouseDown = true;
                    draggedTab = $this;
                    offset = e.offsetX
                })

                $(document).on('mousemove', function(e){
                    if(!mouseDown && !draggedTab) return;

                    var $this = $(this);

                    draggedTab.offset({ left: e.clientX - offset })
                    e.preventDefault()
                })

                $(document).on('mouseup', function(){
                    if(mouseDown && draggedTab){

                    }
                    mouseDown = false;
                    draggedTab = null;
                })
            });
        }
    });
})(jQuery);