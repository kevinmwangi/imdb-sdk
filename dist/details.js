/** ----------------------------------------------------------------
*	TYPE DEFINITIONS FOR THE MOVIE OBJECT
 *	-------------------------------------
 *	https://app.quicktype.io/
*  ----------------------------------------------------------------*/
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Language = exports.RuntimeTypename = exports.ContentTypeTypename = exports.CunningTypename = exports.AmbitiousTypename = exports.DisplayNameTypename = exports.ProductionStatusHistoryTypename = exports.TextEnum = exports.ID = exports.DisplayablePropertyTypename = exports.TitleTypeTypename = exports.HilariousTypename = exports.TitleGenresTypename = exports.ContentRatingEnum = exports.CertificateTypename = exports.IndecentTypename = exports.RatingsSummaryTypename = exports.ThumbnailTypename = exports.IndigoTypename = exports.ReleaseYearTypename = exports.EpisodeCreditsTypename = exports.CharacterTypename = exports.LanguageTypename = exports.StickyTypename = exports.TentacledTypename = exports.CanRateTypename = exports.PlotTextTypename = exports.FluffyTypename = exports.PurpleTypename = exports.OriginalTitleTextTypename = exports.MainTypename = void 0;
    var MainTypename;
    (function (MainTypename) {
        MainTypename["Title"] = "Title";
    })(MainTypename = exports.MainTypename || (exports.MainTypename = {}));
    var OriginalTitleTextTypename;
    (function (OriginalTitleTextTypename) {
        OriginalTitleTextTypename["Aka"] = "Aka";
        OriginalTitleTextTypename["CompanyText"] = "CompanyText";
        OriginalTitleTextTypename["CreditCategory"] = "CreditCategory";
        OriginalTitleTextTypename["GenreItem"] = "GenreItem";
        OriginalTitleTextTypename["LocalizedDisplayableCount"] = "LocalizedDisplayableCount";
        OriginalTitleTextTypename["NameText"] = "NameText";
        OriginalTitleTextTypename["TitleConnectionCategory"] = "TitleConnectionCategory";
        OriginalTitleTextTypename["TitleKeyword"] = "TitleKeyword";
        OriginalTitleTextTypename["TitleText"] = "TitleText";
    })(OriginalTitleTextTypename = exports.OriginalTitleTextTypename || (exports.OriginalTitleTextTypename = {}));
    var PurpleTypename;
    (function (PurpleTypename) {
        PurpleTypename["AlexaQuestionEdge"] = "AlexaQuestionEdge";
        PurpleTypename["FilmingLocationEdge"] = "FilmingLocationEdge";
        PurpleTypename["ImageEdge"] = "ImageEdge";
        PurpleTypename["TaglineEdge"] = "TaglineEdge";
        PurpleTypename["TitleKeywordEdge"] = "TitleKeywordEdge";
    })(PurpleTypename = exports.PurpleTypename || (exports.PurpleTypename = {}));
    var FluffyTypename;
    (function (FluffyTypename) {
        FluffyTypename["AlexaQuestion"] = "AlexaQuestion";
        FluffyTypename["FilmingLocation"] = "FilmingLocation";
        FluffyTypename["Image"] = "Image";
        FluffyTypename["Tagline"] = "Tagline";
        FluffyTypename["TitleKeyword"] = "TitleKeyword";
    })(FluffyTypename = exports.FluffyTypename || (exports.FluffyTypename = {}));
    var PlotTextTypename;
    (function (PlotTextTypename) {
        PlotTextTypename["Markdown"] = "Markdown";
    })(PlotTextTypename = exports.PlotTextTypename || (exports.PlotTextTypename = {}));
    var CanRateTypename;
    (function (CanRateTypename) {
        CanRateTypename["CanRate"] = "CanRate";
    })(CanRateTypename = exports.CanRateTypename || (exports.CanRateTypename = {}));
    var TentacledTypename;
    (function (TentacledTypename) {
        TentacledTypename["CreditEdge"] = "CreditEdge";
    })(TentacledTypename = exports.TentacledTypename || (exports.TentacledTypename = {}));
    var StickyTypename;
    (function (StickyTypename) {
        StickyTypename["Cast"] = "Cast";
    })(StickyTypename = exports.StickyTypename || (exports.StickyTypename = {}));
    var LanguageTypename;
    (function (LanguageTypename) {
        LanguageTypename["CountryOfOrigin"] = "CountryOfOrigin";
        LanguageTypename["CreditCategory"] = "CreditCategory";
        LanguageTypename["DisplayableLanguage"] = "DisplayableLanguage";
        LanguageTypename["Image"] = "Image";
    })(LanguageTypename = exports.LanguageTypename || (exports.LanguageTypename = {}));
    var CharacterTypename;
    (function (CharacterTypename) {
        CharacterTypename["Character"] = "Character";
    })(CharacterTypename = exports.CharacterTypename || (exports.CharacterTypename = {}));
    var EpisodeCreditsTypename;
    (function (EpisodeCreditsTypename) {
        EpisodeCreditsTypename["EpisodeCastConnection"] = "EpisodeCastConnection";
    })(EpisodeCreditsTypename = exports.EpisodeCreditsTypename || (exports.EpisodeCreditsTypename = {}));
    var ReleaseYearTypename;
    (function (ReleaseYearTypename) {
        ReleaseYearTypename["YearRange"] = "YearRange";
    })(ReleaseYearTypename = exports.ReleaseYearTypename || (exports.ReleaseYearTypename = {}));
    var IndigoTypename;
    (function (IndigoTypename) {
        IndigoTypename["Name"] = "Name";
    })(IndigoTypename = exports.IndigoTypename || (exports.IndigoTypename = {}));
    var ThumbnailTypename;
    (function (ThumbnailTypename) {
        ThumbnailTypename["Image"] = "Image";
        ThumbnailTypename["Thumbnail"] = "Thumbnail";
    })(ThumbnailTypename = exports.ThumbnailTypename || (exports.ThumbnailTypename = {}));
    var RatingsSummaryTypename;
    (function (RatingsSummaryTypename) {
        RatingsSummaryTypename["RatingsSummary"] = "RatingsSummary";
    })(RatingsSummaryTypename = exports.RatingsSummaryTypename || (exports.RatingsSummaryTypename = {}));
    var IndecentTypename;
    (function (IndecentTypename) {
        IndecentTypename["MoreLikeThisEdge"] = "MoreLikeThisEdge";
    })(IndecentTypename = exports.IndecentTypename || (exports.IndecentTypename = {}));
    var CertificateTypename;
    (function (CertificateTypename) {
        CertificateTypename["Certificate"] = "Certificate";
    })(CertificateTypename = exports.CertificateTypename || (exports.CertificateTypename = {}));
    var ContentRatingEnum;
    (function (ContentRatingEnum) {
        ContentRatingEnum["R"] = "R";
        ContentRatingEnum["TvMa"] = "TV-MA";
    })(ContentRatingEnum = exports.ContentRatingEnum || (exports.ContentRatingEnum = {}));
    var TitleGenresTypename;
    (function (TitleGenresTypename) {
        TitleGenresTypename["TitleGenres"] = "TitleGenres";
    })(TitleGenresTypename = exports.TitleGenresTypename || (exports.TitleGenresTypename = {}));
    var HilariousTypename;
    (function (HilariousTypename) {
        HilariousTypename["TitleGenre"] = "TitleGenre";
    })(HilariousTypename = exports.HilariousTypename || (exports.HilariousTypename = {}));
    var TitleTypeTypename;
    (function (TitleTypeTypename) {
        TitleTypeTypename["TitleType"] = "TitleType";
    })(TitleTypeTypename = exports.TitleTypeTypename || (exports.TitleTypeTypename = {}));
    var DisplayablePropertyTypename;
    (function (DisplayablePropertyTypename) {
        DisplayablePropertyTypename["DisplayableTitleTypeProperty"] = "DisplayableTitleTypeProperty";
    })(DisplayablePropertyTypename = exports.DisplayablePropertyTypename || (exports.DisplayablePropertyTypename = {}));
    var ID;
    (function (ID) {
        ID["Movie"] = "movie";
        ID["TvMiniSeries"] = "tvMiniSeries";
        ID["TvSeries"] = "tvSeries";
    })(ID = exports.ID || (exports.ID = {}));
    var TextEnum;
    (function (TextEnum) {
        TextEnum["Movie"] = "Movie";
        TextEnum["TVMiniSeries"] = "TV Mini Series";
        TextEnum["TVSeries"] = "TV Series";
    })(TextEnum = exports.TextEnum || (exports.TextEnum = {}));
    var ProductionStatusHistoryTypename;
    (function (ProductionStatusHistoryTypename) {
        ProductionStatusHistoryTypename["ProductionStatusHistory"] = "ProductionStatusHistory";
    })(ProductionStatusHistoryTypename = exports.ProductionStatusHistoryTypename || (exports.ProductionStatusHistoryTypename = {}));
    var DisplayNameTypename;
    (function (DisplayNameTypename) {
        DisplayNameTypename["LocalizedString"] = "LocalizedString";
        DisplayNameTypename["TitleTypeCategory"] = "TitleTypeCategory";
    })(DisplayNameTypename = exports.DisplayNameTypename || (exports.DisplayNameTypename = {}));
    var AmbitiousTypename;
    (function (AmbitiousTypename) {
        AmbitiousTypename["VideoEdge"] = "VideoEdge";
    })(AmbitiousTypename = exports.AmbitiousTypename || (exports.AmbitiousTypename = {}));
    var CunningTypename;
    (function (CunningTypename) {
        CunningTypename["Video"] = "Video";
    })(CunningTypename = exports.CunningTypename || (exports.CunningTypename = {}));
    var ContentTypeTypename;
    (function (ContentTypeTypename) {
        ContentTypeTypename["VideoContentType"] = "VideoContentType";
    })(ContentTypeTypename = exports.ContentTypeTypename || (exports.ContentTypeTypename = {}));
    var RuntimeTypename;
    (function (RuntimeTypename) {
        RuntimeTypename["VideoRuntime"] = "VideoRuntime";
    })(RuntimeTypename = exports.RuntimeTypename || (exports.RuntimeTypename = {}));
    var Language;
    (function (Language) {
        Language["En"] = "en";
        Language["EnUS"] = "en-US";
    })(Language = exports.Language || (exports.Language = {}));
});
