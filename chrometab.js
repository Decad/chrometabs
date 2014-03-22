;(function($){
    $.fn.extend({
        chrometab: function(options) {

            this.defaultOptions = {};
            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {
                var $tabContainer = $(this),
                    $tabs = $tabContainer.find('.tab'),
                    mouseDown = false,
                    draggedTab = null,
                    tCount = $tabs.length;


                // Fix inline-block margin issues.
                $tabContainer.append($tabs.detach())

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

                    var left = e.clientX - offset,
                        ati = $('.tabs').find('.tab.active').index();

                    draggedTab.offset({ left: left })

                    t = $tabs.sort(function(a, b){
                        return $(a).offset().left > $(b).offset().left
                    })

                    $tabs.detach();
                    $tabContainer.append(t)

                    if(ati != $('.tabs').find('.tab.active').index()){
                        $('.tabs').find('.tab.active').css('left', '')
                    }

                    $tabs = $tabContainer.find('.tab')

                    e.preventDefault()
                })

                $(document).on('mouseup', function(){
                    if(mouseDown && draggedTab){
                        $tabs.css('left', '')
                    }
                    mouseDown = false;
                    draggedTab = null;
                })
            });
        }
    });
})(jQuery);