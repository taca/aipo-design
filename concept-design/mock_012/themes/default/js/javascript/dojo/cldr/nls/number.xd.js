dojo._xdResourceLoaded({
depends: [["provide", "dojo.cldr.nls.number"]],
defineResource: function(dojo){dojo.provide("dojo.cldr.nls.number");dojo._xdLoadFlattenedBundle("dojo.cldr", "number", "", ({"scientificFormat": "#E0", "currencySpacing-afterCurrency-currencyMatch": "[:letter:]", "infinity": "∞", "list": ";", "percentSign": "%", "minusSign": "-", "currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]", "currencySpacing-afterCurrency-insertBetween": " ", "nan": "NaN", "nativeZeroDigit": "0", "plusSign": "+", "currencySpacing-afterCurrency-surroundingMatch": "[:digit:]", "currencyFormat": "¤ #,##0.00", "currencySpacing-beforeCurrency-currencyMatch": "[:letter:]", "perMille": "‰", "group": ",", "percentFormat": "#,##0%", "decimalFormat": "#,##0.###", "decimal": ".", "patternDigit": "#", "currencySpacing-beforeCurrency-insertBetween": " ", "exponential": "E"})
);
}});