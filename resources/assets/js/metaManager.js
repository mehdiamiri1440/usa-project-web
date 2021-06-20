var defaultTitle = "باسکول | بازارگاه کشاورزی";
var titleTemplate = "باسکول | %s";

function checkMetaName(meta, pageMeta) {
    if (pageMeta.meta) {
        pageMeta.meta.forEach((item) => {
            if (item.name) {
                if (meta.attr("name") == item.name) {
                    meta.remove();
                }
            }
        });
    }
}

function checkProperty(meta, pageMeta) {
    if (pageMeta.meta) {
        pageMeta.meta.forEach((item) => {
            if (item.property) {
                if (meta.attr("property") == item.property) {
                    meta.remove();
                }
            }
        });
    }
}

function checkLink(link, pageMeta) {
    if (pageMeta.link) {
        pageMeta.link.forEach((item) => {
            if (item.rel == link.attr("rel")) {
                link.remove();
            }
        });
    }
}

const metaManager = (pageMeta) => {


    if (pageMeta) {
        if (pageMeta.titleTemplate) {
            titleTemplate = pageMeta.titleTemplate
        }

        let buskoolMeta = $('*[data-sync="buskool-meta"]');
        let siteMeta = $("meta");
        let siteLinks = $("link");

        // Reset custom metas
        buskoolMeta.remove();

        siteMeta.each(function () {
            if ($(this).attr("name")) {
                checkMetaName($(this), pageMeta);
            } else if ($(this).attr("property")) {
                checkProperty($(this), pageMeta);
            }
        });

        siteLinks.each(function () {
            if ($(this).attr("rel") == "canonical") {
                checkLink($(this), pageMeta);
            }
        });

        $.each(pageMeta, function (key, metaItem) {
            switch (key) {
                case "title":
                    metaItem
                        ? $("title").text(titleTemplate.replace("%s", metaItem))
                        : $("title").text(defaultTitle);
                    break;

                case "meta":
                    let myArray = [];

                    metaItem.forEach((item) => {
                        let keyValues = Object.entries(item);
                        let str = "";

                        myArray.push(
                            keyValues.forEach((newItem) => {
                                str = str + `${newItem[0]}="${newItem[1]}" `;
                            })
                        );
                        $("head").append(`<meta data-sync='buskool-meta' ${str} />`);
                    });
                    break;

                case "link":
                    let linkArray = [];
                    metaItem.forEach((item) => {
                        let keyValues = Object.entries(item);
                        let str = "";

                        linkArray.push(
                            keyValues.forEach((newItem) => {
                                str = str + `${newItem[0]}="${newItem[1]}" `;
                            })
                        );
                        $("head").append(`<link data-sync='buskool-meta' ${str} />`);
                    });
                    break;
            }
        });
    }
}

export default {
    metaManager
};