(function( $ ) {
    /**
     * @elements Object : { '#label' => 2, '#title' => 15 }
     * @author Josin <774542602@qq.com> https://www.supjos.cn
     * @copyright Josin All rights reserved.
     */
    $.fn.limitLength = function(elements) {
        // Check whether the current scope is document or not.
        // if the elements is object, means the id => length
        if ( !Array.isArray(elements) && (typeof elements == "object") ) {
            for (let selector in elements) {
                // Current limit
                let elementLimit = elements[selector];
                // Current input mode
                let inputEnglishMode = true;
                $(selector).on('compositionstart', function(){
                    inputEnglishMode = false;
                });
                $(selector).on('compositionend', function(){
                    inputEnglishMode = true;
                });

                $(this).find(selector).blur(function(event) {
                    // Check the length after lost the focus input
                    let inputLength = 0;
                    let tagName = $(this).get(0).tagName.toString().toLowerCase();
                    if ('' == tagName) {
                        tagName = $(this).get(0).localName;
                    }
                    switch (tagName) {
                        case 'div':
                            inputLength = $(this).html();
                            break;
                        default:
                            inputLength = $(this).val();
                    }
                    if (elementLimit < inputLength) {
                        switch (tagName) {
                            case 'div':
                                $(this).html($(this).html().toString().substring(0, elementLimit));
                                break;
                            default:
                                $(this).val($(this).val().toString().substring(0, elementLimit));
                                break;
                        }
                    }
                });
                // Set each element's key-up event
                $(this).find(selector).keyup(function(event){
                    // first to check the type key was space or not, if true, check the input length
                    // otherwise omit the length input to
                    // check the tagName for the input type
                    let tagName = $(this).get(0).tagName.toString().toLowerCase();
                    if ('' == tagName) {
                        tagName = $(this).get(0).localName;
                    }

                    let inputLength = 0;
                    switch (tagName) {
                        case 'div':
                            inputLength = $(this).html();
                            break;
                        default:
                            inputLength = $(this).val();

                    }
                    // after getting the value length, first to check whether the space key pressed
                    // if pressed, current is chinese input, otherwise english mode.
                    if ( 32 == event.keyCode && !inputEnglishMode ) {
                        if ( elementLimit < inputLength ) {
                            switch (tagName) {
                                case 'div':
                                    $(this).html($(this).html().toString().substring(0, elementLimit));
                                    break;
                                default:
                                    $(this).val($(this).val().toString().substring(0, elementLimit));
                                    break;
                            }
                        }
                    } else if (inputEnglishMode) {
                        switch (tagName) {
                            case 'div':
                                $(this).html($(this).html().toString().substring(0, elementLimit));
                                break;
                            default:
                                $(this).val($(this).val().toString().substring(0, elementLimit));
                                break;
                        }
                    }
                });
            }
        }
    };
})( jQuery );
