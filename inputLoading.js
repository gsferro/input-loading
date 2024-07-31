/**
 * Created by Guilherme on 24/08/2016.
 */
// Precisa ter o aqruivo css que contenha a classe inputLoading.css
jQuery.fn.inputLoandig = function (params)
{
    var classes = [ "inputLoadingGifCenter" , "inputLoadingGifRight" , "inputLoadingGifLeft" ];
    // apagar - sem params
    if ( $ ( this ).is ( "." + classes.join ( ", ." ) ) )
    {
        $ ( this ).removeClass ( classes.join ( " " ) );
    }
    else
    {
        var param  = $.extend ( { align : 'center' , clear : false } , params );
        var classe = "";

        switch ( param.align )
        {
            case 'center' 	: classe = classes[0]; break;
            case 'right' 	: classe = classes[1]; break;
            case 'left' 	: classe = classes[2]; break;
        }
        param.clear && $ ( this ).val ( '' );
        $ ( this ).addClass ( classe );
    }
};