var wms_layers = [];


        var lyr_Statelit_0 = new ol.layer.Tile({
            'title': 'Statelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pp_2 = new ol.format.GeoJSON();
var features_pp_2 = format_pp_2.readFeatures(json_pp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pp_2.addFeatures(features_pp_2);
var lyr_pp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pp_2, 
                style: style_pp_2,
                popuplayertitle: "pp",
                interactive: true,
                title: '<img src="styles/legend/pp_2.png" /> pp'
            });
var format_TitikPenangkapan_3 = new ol.format.GeoJSON();
var features_TitikPenangkapan_3 = format_TitikPenangkapan_3.readFeatures(json_TitikPenangkapan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPenangkapan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPenangkapan_3.addFeatures(features_TitikPenangkapan_3);
var lyr_TitikPenangkapan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPenangkapan_3, 
                style: style_TitikPenangkapan_3,
                popuplayertitle: "Titik Penangkapan",
                interactive: true,
                title: '<img src="styles/legend/TitikPenangkapan_3.png" /> Titik Penangkapan'
            });
var format_BatasWPP_4 = new ol.format.GeoJSON();
var features_BatasWPP_4 = format_BatasWPP_4.readFeatures(json_BatasWPP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWPP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWPP_4.addFeatures(features_BatasWPP_4);
var lyr_BatasWPP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWPP_4, 
                style: style_BatasWPP_4,
                popuplayertitle: "Batas WPP",
                interactive: true,
                title: '<img src="styles/legend/BatasWPP_4.png" /> Batas WPP'
            });
var format_Laut_5 = new ol.format.GeoJSON();
var features_Laut_5 = format_Laut_5.readFeatures(json_Laut_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laut_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laut_5.addFeatures(features_Laut_5);
var lyr_Laut_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laut_5, 
                style: style_Laut_5,
                popuplayertitle: "Laut",
                interactive: true,
                title: '<img src="styles/legend/Laut_5.png" /> Laut'
            });
var format_Daratan_6 = new ol.format.GeoJSON();
var features_Daratan_6 = format_Daratan_6.readFeatures(json_Daratan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daratan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daratan_6.addFeatures(features_Daratan_6);
var lyr_Daratan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daratan_6, 
                style: style_Daratan_6,
                popuplayertitle: "Daratan",
                interactive: true,
                title: '<img src="styles/legend/Daratan_6.png" /> Daratan'
            });
var format_Januari_7 = new ol.format.GeoJSON();
var features_Januari_7 = format_Januari_7.readFeatures(json_Januari_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Januari_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Januari_7.addFeatures(features_Januari_7);
var lyr_Januari_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Januari_7, 
                style: style_Januari_7,
                popuplayertitle: "Januari",
                interactive: true,
    title: 'Januari<br />\
    <img src="styles/legend/Januari_7_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Januari_7_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Januari_7_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Januari_7_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Januari_7_4.png" /> 214 - 940<br />'
        });
var format_Februari_8 = new ol.format.GeoJSON();
var features_Februari_8 = format_Februari_8.readFeatures(json_Februari_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Februari_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Februari_8.addFeatures(features_Februari_8);
var lyr_Februari_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Februari_8, 
                style: style_Februari_8,
                popuplayertitle: "Februari",
                interactive: true,
    title: 'Februari<br />\
    <img src="styles/legend/Februari_8_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Februari_8_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Februari_8_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Februari_8_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Februari_8_4.png" /> 214 - 940<br />'
        });
var format_Maret_9 = new ol.format.GeoJSON();
var features_Maret_9 = format_Maret_9.readFeatures(json_Maret_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maret_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maret_9.addFeatures(features_Maret_9);
var lyr_Maret_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maret_9, 
                style: style_Maret_9,
                popuplayertitle: "Maret",
                interactive: true,
    title: 'Maret<br />\
    <img src="styles/legend/Maret_9_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Maret_9_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Maret_9_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Maret_9_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Maret_9_4.png" /> 214 - 940<br />'
        });
var format_April_10 = new ol.format.GeoJSON();
var features_April_10 = format_April_10.readFeatures(json_April_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_April_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_April_10.addFeatures(features_April_10);
var lyr_April_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_April_10, 
                style: style_April_10,
                popuplayertitle: "April",
                interactive: true,
    title: 'April<br />\
    <img src="styles/legend/April_10_0.png" /> 10 - 86<br />\
    <img src="styles/legend/April_10_1.png" /> 86 - 100<br />\
    <img src="styles/legend/April_10_2.png" /> 100 - 190<br />\
    <img src="styles/legend/April_10_3.png" /> 190 - 214<br />\
    <img src="styles/legend/April_10_4.png" /> 214 - 940<br />'
        });
var format_Mei_11 = new ol.format.GeoJSON();
var features_Mei_11 = format_Mei_11.readFeatures(json_Mei_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mei_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mei_11.addFeatures(features_Mei_11);
var lyr_Mei_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mei_11, 
                style: style_Mei_11,
                popuplayertitle: "Mei",
                interactive: true,
    title: 'Mei<br />\
    <img src="styles/legend/Mei_11_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Mei_11_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Mei_11_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Mei_11_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Mei_11_4.png" /> 214 - 940<br />'
        });
var format_Juni_12 = new ol.format.GeoJSON();
var features_Juni_12 = format_Juni_12.readFeatures(json_Juni_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juni_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juni_12.addFeatures(features_Juni_12);
var lyr_Juni_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juni_12, 
                style: style_Juni_12,
                popuplayertitle: "Juni",
                interactive: true,
    title: 'Juni<br />\
    <img src="styles/legend/Juni_12_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Juni_12_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Juni_12_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Juni_12_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Juni_12_4.png" /> 214 - 940<br />'
        });
var format_Juli_13 = new ol.format.GeoJSON();
var features_Juli_13 = format_Juli_13.readFeatures(json_Juli_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Juli_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Juli_13.addFeatures(features_Juli_13);
var lyr_Juli_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Juli_13, 
                style: style_Juli_13,
                popuplayertitle: "Juli",
                interactive: true,
    title: 'Juli<br />\
    <img src="styles/legend/Juli_13_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Juli_13_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Juli_13_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Juli_13_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Juli_13_4.png" /> 214 - 940<br />'
        });
var format_Agustus_14 = new ol.format.GeoJSON();
var features_Agustus_14 = format_Agustus_14.readFeatures(json_Agustus_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agustus_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agustus_14.addFeatures(features_Agustus_14);
var lyr_Agustus_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agustus_14, 
                style: style_Agustus_14,
                popuplayertitle: "Agustus",
                interactive: true,
    title: 'Agustus<br />\
    <img src="styles/legend/Agustus_14_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Agustus_14_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Agustus_14_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Agustus_14_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Agustus_14_4.png" /> 214 - 940<br />'
        });
var format_September_15 = new ol.format.GeoJSON();
var features_September_15 = format_September_15.readFeatures(json_September_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_September_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_September_15.addFeatures(features_September_15);
var lyr_September_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_September_15, 
                style: style_September_15,
                popuplayertitle: "September",
                interactive: true,
    title: 'September<br />\
    <img src="styles/legend/September_15_0.png" /> 10 - 86<br />\
    <img src="styles/legend/September_15_1.png" /> 86 - 100<br />\
    <img src="styles/legend/September_15_2.png" /> 100 - 190<br />\
    <img src="styles/legend/September_15_3.png" /> 190 - 214<br />\
    <img src="styles/legend/September_15_4.png" /> 214 - 940<br />'
        });
var format_Oktober_16 = new ol.format.GeoJSON();
var features_Oktober_16 = format_Oktober_16.readFeatures(json_Oktober_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oktober_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oktober_16.addFeatures(features_Oktober_16);
var lyr_Oktober_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oktober_16, 
                style: style_Oktober_16,
                popuplayertitle: "Oktober",
                interactive: true,
    title: 'Oktober<br />\
    <img src="styles/legend/Oktober_16_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Oktober_16_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Oktober_16_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Oktober_16_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Oktober_16_4.png" /> 214 - 940<br />'
        });
var format_November_17 = new ol.format.GeoJSON();
var features_November_17 = format_November_17.readFeatures(json_November_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_November_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_November_17.addFeatures(features_November_17);
var lyr_November_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_November_17, 
                style: style_November_17,
                popuplayertitle: "November",
                interactive: true,
    title: 'November<br />\
    <img src="styles/legend/November_17_0.png" /> 10 - 86<br />\
    <img src="styles/legend/November_17_1.png" /> 86 - 100<br />\
    <img src="styles/legend/November_17_2.png" /> 100 - 190<br />\
    <img src="styles/legend/November_17_3.png" /> 190 - 214<br />\
    <img src="styles/legend/November_17_4.png" /> 214 - 940<br />'
        });
var format_Desember_18 = new ol.format.GeoJSON();
var features_Desember_18 = format_Desember_18.readFeatures(json_Desember_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desember_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desember_18.addFeatures(features_Desember_18);
var lyr_Desember_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desember_18, 
                style: style_Desember_18,
                popuplayertitle: "Desember",
                interactive: true,
    title: 'Desember<br />\
    <img src="styles/legend/Desember_18_0.png" /> 10 - 86<br />\
    <img src="styles/legend/Desember_18_1.png" /> 86 - 100<br />\
    <img src="styles/legend/Desember_18_2.png" /> 100 - 190<br />\
    <img src="styles/legend/Desember_18_3.png" /> 190 - 214<br />\
    <img src="styles/legend/Desember_18_4.png" /> 214 - 940<br />'
        });
var group_2022 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "2022"});
var group_2021 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "2021"});
var group_2020 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "2020"});
var group_2019 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "2019"});
var group_2018 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "2018"});

lyr_Statelit_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_pp_2.setVisible(true);lyr_TitikPenangkapan_3.setVisible(true);lyr_BatasWPP_4.setVisible(true);lyr_Laut_5.setVisible(true);lyr_Daratan_6.setVisible(true);lyr_Januari_7.setVisible(true);lyr_Februari_8.setVisible(true);lyr_Maret_9.setVisible(true);lyr_April_10.setVisible(true);lyr_Mei_11.setVisible(true);lyr_Juni_12.setVisible(true);lyr_Juli_13.setVisible(true);lyr_Agustus_14.setVisible(true);lyr_September_15.setVisible(true);lyr_Oktober_16.setVisible(true);lyr_November_17.setVisible(true);lyr_Desember_18.setVisible(true);
var layersList = [lyr_Statelit_0,lyr_OpenStreetMap_1,lyr_pp_2,lyr_TitikPenangkapan_3,lyr_BatasWPP_4,lyr_Laut_5,lyr_Daratan_6,lyr_Januari_7,lyr_Februari_8,lyr_Maret_9,lyr_April_10,lyr_Mei_11,lyr_Juni_12,lyr_Juli_13,lyr_Agustus_14,lyr_September_15,lyr_Oktober_16,lyr_November_17,lyr_Desember_18];
lyr_pp_2.set('fieldAliases', {});
lyr_TitikPenangkapan_3.set('fieldAliases', {});
lyr_BatasWPP_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Laut_5.set('fieldAliases', {});
lyr_Daratan_6.set('fieldAliases', {});
lyr_Januari_7.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Februari_8.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Maret_9.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_April_10.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Mei_11.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Juni_12.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Juli_13.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Agustus_14.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_September_15.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Oktober_16.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_November_17.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_Desember_18.set('fieldAliases', {'Tangkapan': 'Tangkapan', 'WPP': 'WPP', 'Pelabuhan Pendaratan': 'Pelabuhan Pendaratan', 'y': 'y', 'x': 'x', 'Hasil Tangkap': 'Hasil Tangkap', });
lyr_pp_2.set('fieldImages', {});
lyr_TitikPenangkapan_3.set('fieldImages', {});
lyr_BatasWPP_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Laut_5.set('fieldImages', {});
lyr_Daratan_6.set('fieldImages', {});
lyr_Januari_7.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Februari_8.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Maret_9.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_April_10.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Mei_11.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Juni_12.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Juli_13.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Agustus_14.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_September_15.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Oktober_16.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_November_17.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_Desember_18.set('fieldImages', {'Tangkapan': 'TextEdit', 'WPP': 'TextEdit', 'Pelabuhan Pendaratan': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Hasil Tangkap': 'Range', });
lyr_pp_2.set('fieldLabels', {});
lyr_TitikPenangkapan_3.set('fieldLabels', {});
lyr_BatasWPP_4.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Laut_5.set('fieldLabels', {});
lyr_Daratan_6.set('fieldLabels', {});
lyr_Januari_7.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Februari_8.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Maret_9.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_April_10.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Mei_11.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Juni_12.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Juli_13.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Agustus_14.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_September_15.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Oktober_16.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_November_17.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Desember_18.set('fieldLabels', {'Tangkapan': 'no label', 'WPP': 'no label', 'Pelabuhan Pendaratan': 'no label', 'y': 'no label', 'x': 'no label', 'Hasil Tangkap': 'no label', });
lyr_Desember_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});