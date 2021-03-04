(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{134:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Articles"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"start"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"start"},value:{kind:"Variable",name:{kind:"Name",value:"start"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"updated_at:desc",block:!1}},{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"list_exclude"},value:{kind:"BooleanValue",value:!1}},{kind:"ObjectField",name:{kind:"Name",value:"homepage"},value:{kind:"BooleanValue",value:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"excerpt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"homepage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"random_image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lang"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeText"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"gallery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeText"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"image_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"seo_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"seo_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"parent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:587}};t.loc.source={body:'query Articles ( $limit : Int, $start : Int ) {\r\n  articles ( limit: $limit , start: $start , sort: "updated_at:desc" , where : { list_exclude: false , homepage: false } ){\r\n    slug\r\n    title\r\n    excerpt\r\n    content\r\n    homepage\r\n    random_image\r\n    tags\r\n    lang\r\n    image {\r\n      url\r\n      caption\r\n      alternativeText\r\n    }\r\n    gallery {\r\n      url\r\n      caption\r\n      alternativeText\r\n    }\r\n    image_title\r\n    updated_at\r\n    seo_title\r\n    seo_description\r\n    categories {\r\n        name\r\n        slug\r\n    }\r\n    parent {\r\n      slug\r\n      title\r\n    }\r\n  }\r\n}',name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var d=n.type;"NamedType"===d.kind&&t.add(d.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.Articles=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var l=d[n]||new Set,m=new Set,c=new Set;for(l.forEach((function(e){c.add(e)}));c.size>0;){var o=c;c=new Set,o.forEach((function(e){m.has(e)||(m.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return m.forEach((function(n){var d=r(e,n);d&&t.definitions.push(d)})),t}(t,"Articles")},249:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Articles"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"categories"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"loop"},value:{kind:"BooleanValue",value:!0}},{kind:"ObjectField",name:{kind:"Name",value:"homepage"},value:{kind:"BooleanValue",value:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"excerpt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"homepage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"random_image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tags"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lang"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeText"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"gallery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alternativeText"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"image_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"seo_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"seo_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:488}};t.loc.source={body:"query Articles ($slug:String) {\r\n  articles ( where: { categories : { slug:$slug } , loop: true , homepage: false } ) {\r\n    slug\r\n    title\r\n    excerpt\r\n    content\r\n    homepage\r\n    random_image\r\n    tags\r\n    lang\r\n    image {\r\n      url\r\n      caption\r\n      alternativeText\r\n    }\r\n    gallery {\r\n      url\r\n      caption\r\n      alternativeText\r\n    }\r\n    image_title\r\n    updated_at\r\n    seo_title\r\n    seo_description\r\n    categories {\r\n        name\r\n        slug\r\n    }\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var d=n.type;"NamedType"===d.kind&&t.add(d.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.Articles=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var l=d[n]||new Set,m=new Set,c=new Set;for(l.forEach((function(e){c.add(e)}));c.size>0;){var o=c;c=new Set,o.forEach((function(e){m.has(e)||(m.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return m.forEach((function(n){var d=r(e,n);d&&t.definitions.push(d)})),t}(t,"Articles")}}]);