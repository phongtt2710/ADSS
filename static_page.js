function HighlightPage(pageid, pagename) {
    try {
        //if the contents frame exists then highlight the page
        if (parent.document.getElementById("fra_contents") != null) {
            docObj = parent.fra_contents.findObj(pageid);
            docObj.forceOpeningOfAncestorFolders();
            parent.fra_contents.highlightObjLink(docObj)
        }
        //Set [page name] if found
        //alert("pagename = " + pagename);
        if (parent.document.getElementById("VarPageName") != null) {
            parent.document.getElementById("VarPageName").innerHTML = pagename;
        }

    }
    catch (err) {
        //do nothing
    }
}

function MenuItemSelected(pageid) {
    //alert("highlight menu item = " + pageid);
    if (document.getElementById("tdmenu_" + pageid) != null) {
        //unselect selected menu item
        var container = document.getElementById("tablemenu_container");
        if (container.getElementsByClassName) {
            var SelectedTags = container.getElementsByClassName("menu_selected");
            //alert("There are " + SelectedTags.length + " elements in the container with class of 'menu_selected'.");
            for (var i = 0; i < SelectedTags.length; i++) {
                var SelectedTag = SelectedTags[i];
                SelectedTag.className = "menu_notselected";
            }
        }
        //alert("menu item found");
        document.getElementById("tdmenu_" + pageid).className = "menu_selected";
    }
}

function HighlightSearchText() {
    sCriteria = getURLvalue("criteria");
    sSearchText = getURLvalue("searchTxt");
    if (sSearchText != "") {
        if (sCriteria == "phrase") {
            highlightSearchTerms(sSearchText, true);
        }
        else {
            highlightSearchTerms(sSearchText, false);
        }
    }
}


// This function grabs a specified value from a GET-style URL
// you call it with the name of the variable and it returns
// the value, or false if not found.
function getURLvalue(getName) {
    var i, pos, argname, argvalue, queryString, pairs;

    // get the string following the question mark
    queryString = location.href.substring(location.href.indexOf("?") + 1);

    // split parameters into pairs, assuming pairs are separated by ampersands
    pairs = queryString.split("&");

    // for each pair, we get the name and the value
    for (i = 0; i < pairs.length; i++) {
        pos = pairs[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        argname = pairs[i].substring(0, pos);
        argvalue = pairs[i].substring(pos + 1);

        // Replaces "Google-style" + signs with the spaces
        // they represent
        if (argname == getName) {
            return unescape(argvalue.replace(/\+/, " "));
        }
    }
    return false;
}


/*
* This is the function that actually highlights a text string by
* adding HTML tags before and after all occurrences of the search
* term. You can pass your own tags if you'd like, or if the
* highlightStartTag or highlightEndTag parameters are omitted or
* are empty strings then the default <font> tags will be used.
*/
function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) {
    // the highlightStartTag and highlightEndTag parameters are optional
    if ((!highlightStartTag) || (!highlightEndTag)) {
        highlightStartTag = "<font style='background-color:yellow;'>";
        highlightEndTag = "</font>";
    }

    // find all occurences of the search term in the given text,
    // and add some "highlight" tags to them (we're not using a
    // regular expression search, because we want to filter out
    // matches that occur within HTML tags and script blocks, so
    // we have to do a little extra validation)
    var newText = "";
    var i = -1;
    var lcSearchTerm = searchTerm.toLowerCase();
    var lcBodyText = bodyText.toLowerCase();

    while (bodyText.length > 0) {
        i = lcBodyText.indexOf(lcSearchTerm, i + 1);
        if (i < 0) {
            newText += bodyText;
            bodyText = "";
        } else {
            // skip anything inside an HTML tag
            if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
                // skip anything inside a <script> block
                if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
                    newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
                    bodyText = bodyText.substr(i + searchTerm.length);
                    lcBodyText = bodyText.toLowerCase();
                    i = -1;
                }
            }
        }
    }

    return newText;
}


/*
* This is sort of a wrapper function to the doHighlight function.
* It takes the searchText that you pass, optionally splits it into
* separate words, and transforms the text on the current web page.
* Only the "searchText" parameter is required; all other parameters
* are optional and can be omitted.
*/
function highlightSearchTerms(searchText, treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag) {
    // if the treatAsPhrase parameter is true, then we should search for 
    // the entire phrase that was entered; otherwise, we will split the
    // search string so that each word is searched for and highlighted
    // individually
    if (treatAsPhrase) {
        searchArray = [searchText];
    } else {
        searchArray = searchText.split(" ");
    }

    if (!document.body || typeof (document.body.innerHTML) == "undefined") {
        if (warnOnFailure) {
            alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
        }
        return false;
    }

    var bodyText = document.body.innerHTML;
    for (var i = 0; i < searchArray.length; i++) {
        bodyText = doHighlight(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
    }

    document.body.innerHTML = bodyText;
    return true;
}


//----------------- The following functions are used to display flash animations. -----------------
//----------------- This is a workaround for the security issue in IE which only allows flash active content when clicked.-----------------
//v1.1
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AX_RunContent() {
    var ret = AC_AX_GetArgs(arguments);
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_AX_GetArgs(args) {
    var ret = new Object();
    ret.embedAttrs = new Object();
    ret.params = new Object();
    ret.objAttrs = new Object();
    for (var i = 0; i < args.length; i = i + 2) {
        var currArg = args[i].toLowerCase();

        switch (currArg) {
            case "pluginspage":
            case "type":
            case "src":
                ret.embedAttrs[args[i]] = args[i + 1];
                break;
            case "data":
            case "codebase":
            case "classid":
            case "id":
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
                ret.objAttrs[args[i]] = args[i + 1];
                break;
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "tabindex":
                ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
                break;
            default:
                ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
        }
    }
    return ret;
}

//v1.0
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
function AC_AddExtension(src, ext) {
    if (src.indexOf('?') != -1)
        return src.replace(/\?/, ext + '?');
    else
        return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) {
    var str = '<object ';
    for (var i in objAttrs)
        str += i + '="' + objAttrs[i] + '" ';
    str += '>';
    for (var i in params)
        str += '<param name="' + i + '" value="' + params[i] + '" /> ';
    str += '<embed ';
    for (var i in embedAttrs)
        str += i + '="' + embedAttrs[i] + '" ';
    str += ' ></embed></object>';

    document.write(str);
}

function AC_FL_RunContent() {
    var ret =
        AC_GetArgs
            (arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
                , "application/x-shockwave-flash"
            );
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent() {
    var ret =
        AC_GetArgs
            (arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000"
                , null
            );
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
    var ret = new Object();
    ret.embedAttrs = new Object();
    ret.params = new Object();
    ret.objAttrs = new Object();
    for (var i = 0; i < args.length; i = i + 2) {
        var currArg = args[i].toLowerCase();

        switch (currArg) {
            case "classid":
                break;
            case "pluginspage":
                ret.embedAttrs[args[i]] = args[i + 1];
                break;
            case "src":
            case "movie":
                args[i + 1] = AC_AddExtension(args[i + 1], ext);
                ret.embedAttrs["src"] = args[i + 1];
                ret.params[srcParamName] = args[i + 1];
                break;
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
            case "type":
            case "codebase":
                ret.objAttrs[args[i]] = args[i + 1];
                break;
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "id":
            case "tabindex":
                ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
                break;
            default:
                ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
        }
    }
    ret.objAttrs["classid"] = classid;
    if (mimeType) ret.embedAttrs["type"] = mimeType;
    return ret;
}

//function ShowSmallPopup(sPageURL, event) {
//    var docwidth = document.documentElement.clientWidth;
//    var docheight = document.documentElement.clientHeight;
//    var boxwidth = 302;
//    var boxheight = 102;
//    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
//    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
//    //Position Horizontally
//    if (docwidth - event.clientX < boxwidth) {document.getElementById("_DivSmallPopup").style.left = event.clientX + scrollX - boxwidth + "px";}
//    else {document.getElementById("_DivSmallPopup").style.left = event.clientX + scrollX + 15 + "px";}
//    //Position Vertically
//    if (docheight - event.clientY < boxheight) {document.getElementById("_DivSmallPopup").style.top = event.clientY + scrollY - boxheight + "px";}
//    else {document.getElementById("_DivSmallPopup").style.top = event.clientY + scrollY + 8 + "px";}
//    document.getElementById("_DivSmallPopup").innerHTML = "<iframe style='width:100%;height:100%' frameborder=0 src='" + sPageURL + "'></iframe>"
//    document.getElementById("_DivSmallPopup").style.display = ""
//    document.getElementById("_DivSmallPopup").focus();
//}

//function ShowLargePopup(sPageURL, event) {
//    var docwidth = document.documentElement.clientWidth;
//    var docheight = document.documentElement.clientHeight;
//    var boxwidth = 550;
//    var boxheight = 300;
//    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
//    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
//    //Position Horizontally
//    if (docwidth - event.clientX < boxwidth) {document.getElementById("_DivLargePopup").style.left = event.clientX + scrollX - boxwidth + "px";}
//    else {document.getElementById("_DivLargePopup").style.left = event.clientX + scrollX + 15 + "px";}
//    //Position Vertically
//    if (docheight - event.clientY < boxheight) {document.getElementById("_DivLargePopup").style.top = event.clientY + scrollY - boxheight + "px";}
//    else {document.getElementById("_DivLargePopup").style.top = event.clientY + scrollY + 8 + "px";}
//    document.getElementById("_DivLargePopup").innerHTML = "<iframe style='width:100%;height:100%' frameborder=0 src='" + sPageURL + "'></iframe>"
//    document.getElementById("_DivLargePopup").style.display = ""
//    document.getElementById("_DivLargePopup").focus();
//}

//function ShowMouseoverPopup(sPageURL, event) {
//    var docwidth = document.documentElement.clientWidth;
//    var docheight = document.documentElement.clientHeight;
//    var boxwidth = 313;
//    var boxheight = 177;
//    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
//    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
//    //Position Horizontally
//    if (docwidth - event.clientX < boxwidth) {document.getElementById("_DivMouseoverPopup").style.left = event.clientX + scrollX - boxwidth + "px";}
//    else {document.getElementById("_DivMouseoverPopup").style.left = event.clientX + scrollX + 5 + "px";}
//    //Position Vertically
//    if (docheight - event.clientY < boxheight) {document.getElementById("_DivMouseoverPopup").style.top = event.clientY + scrollY - boxheight - 70 + "px";}
//    else {document.getElementById("_DivMouseoverPopup").style.top = event.clientY + scrollY + 8 + "px";}
//    document.getElementById("_DivMouseoverPopup").innerHTML = "<iframe style='width:301px;height:107px' frameborder=0 scrolling='no' src='" + sPageURL + "'></iframe>"
//    document.getElementById("_DivMouseoverPopup").style.display = ""
//}

//function ShowMouseoverPopup2(sPageURL, event) {
//    var docwidth = document.documentElement.clientWidth;
//    var docheight = document.documentElement.clientHeight;
//    var boxwidth = 400;
//    var boxheight = 300;
//    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
//    var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
//    //Position Horizontally
//    if (docwidth - event.clientX < boxwidth) {document.getElementById("_DivMouseoverPopup2").style.left = event.clientX + scrollX - boxwidth + "px";}
//    else {document.getElementById("_DivMouseoverPopup2").style.left = event.clientX + scrollX + 5 + "px";}
//    //Position Vertically
//    if (docheight - event.clientY < boxheight) {document.getElementById("_DivMouseoverPopup2").style.top = event.clientY + scrollY - boxheight - 75 + "px";}
//    else {document.getElementById("_DivMouseoverPopup2").style.top = event.clientY + scrollY + 8 + "px";}
//    document.getElementById("_DivMouseoverPopup2").innerHTML = "<iframe style='width:388px;height:230px' frameborder=0 scrolling='no' src='" + sPageURL + "'></iframe>"
//    document.getElementById("_DivMouseoverPopup2").style.display = ""
//}


//function HideMouseoverPopup() {
//        document.getElementById("_DivMouseoverPopup").innerHTML = ""
//        document.getElementById("_DivMouseoverPopup").style.display = "none"
//    }
//    
//function HideMouseoverPopup2()
//    {
//    document.getElementById("_DivMouseoverPopup2").innerHTML = ""
//    document.getElementById("_DivMouseoverPopup2").style.display = "none"
//    }

function hidepopup(id) {
    //obj.style.display = "none";
    setTimeout("hidepopup2('" + id + "')", 300);
}

function hidepopup2(id) {
    document.getElementById(id).style.display = "none";
}

function ShowPopup(event, PopupID, PopupType) {
    var docwidth = document.documentElement.clientWidth;
    var docheight = document.documentElement.clientHeight;
    var boxwidth = 302;
    var boxheight = 102;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    //var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Get scrollY. It is measured differently for Chrome
    if (document.documentElement.scrollTop == document.body.scrollTop) {
        //if documentElement.scrollTop is the same as body.scrollTop then only use documentElement.scrollTop (seems to be a glitch in Chrome)
        var scrollY = document.documentElement.scrollTop;
    }
    else {
        //all other browsers
        var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    }


    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        document.getElementById(PopupID).style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        document.getElementById(PopupID).style.left = event.clientX + scrollX + 15 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        document.getElementById(PopupID).style.top = event.clientY + scrollY - boxheight + "px";
    }
    else {
        document.getElementById(PopupID).style.top = event.clientY + scrollY + 8 + "px";
    }
    document.getElementById(PopupID).style.display = ""
    document.getElementById(PopupID).focus();
}

function ShowMouseoverPopup(event, PopupID) {
    var docwidth = document.documentElement.clientWidth;
    var docheight = document.documentElement.clientHeight;
    var boxwidth = 313;
    var boxheight = 177;
    var scrollX = document.documentElement.scrollLeft + document.body.scrollLeft;
    //var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    //Get scrollY. It is measured differently for Chrome
    if (document.documentElement.scrollTop == document.body.scrollTop) {
        //if documentElement.scrollTop is the same as body.scrollTop then only use documentElement.scrollTop (seems to be a glitch in Chrome)
        var scrollY = document.documentElement.scrollTop;
    }
    else {
        //all other browsers
        var scrollY = document.documentElement.scrollTop + document.body.scrollTop;
    }

    //Position Horizontally
    if (docwidth - event.clientX < boxwidth) {
        document.getElementById(PopupID).style.left = event.clientX + scrollX - boxwidth + "px";
    }
    else {
        document.getElementById(PopupID).style.left = event.clientX + scrollX + 5 + "px";
    }
    //Position Vertically
    if (docheight - event.clientY < boxheight) {
        document.getElementById(PopupID).style.top = event.clientY + scrollY - boxheight - 70 + "px";
    }
    else {
        document.getElementById(PopupID).style.top = event.clientY + scrollY + 8 + "px";
    }

    //document.getElementById(PopupID).innerHTML = "<iframe style='width:301px;height:107px' frameborder=0 allowTransparency='true' scrolling='no' src='" + sPageURL + "&pagetype=popup'></iframe>"
    document.getElementById(PopupID).style.display = ""
}

function HideMouseoverPopup(event, PopupID) {
    //document.getElementById(PopupID).innerHTML = ""
    document.getElementById(PopupID).style.display = "none"
}

function ClickTab(obj) {
    //unselect all tabs
    for (var i = 0; i < obj.parentNode.parentNode.childNodes[0].childNodes.length; i++) {
        //Make sure that the tag has a class of TabSelected or TabBodySelected
        tabnode = obj.parentNode.parentNode.childNodes[0].childNodes[i];
        bodynode = obj.parentNode.parentNode.childNodes[1].childNodes[i];
        tabnode.className = "TabNotSelected";
        if (obj == tabnode) {
            bodynode.className = "TabBodySelected"
        }
        else {
            bodynode.className = "TabBodyNotSelected";
        }
    }
    //select the tab
    obj.className = "TabSelected";
}

function expand_Toggle_Panels() {
    var TDs = document.getElementsByTagName("TD");
    for (var no = 0; no < TDs.length; no++) {
        if (TDs[no].className == "TogglePanel_Heading") {
            TDs[no].parentNode.parentNode.rows.item(1).style.display = "";
            TDs[no].style.backgroundImage = "url(images/exp.gif)";
        }
    }
    //Display the collapse link
    document.getElementById("Link_Expand_All").style.display = "none";
    document.getElementById("Link_Collapse_All").style.display = "";
}

function collapse_Toggle_Panels() {
    var TDs = document.getElementsByTagName("TD");
    for (var no = 0; no < TDs.length; no++) {
        if (TDs[no].className == "TogglePanel_Heading") {
            TDs[no].parentNode.parentNode.rows.item(1).style.display = "none";
            TDs[no].style.backgroundImage = "url(images/col.gif)";
        }
    }
    document.getElementById("Link_Expand_All").style.display = "";
    document.getElementById("Link_Collapse_All").style.display = "none";
}


//function showtab(tab) {
//    document.getElementById("tab1").style.display = "none";
//    document.getElementById("tab2").style.display = "none";
//    document.getElementById("tab3").style.display = "none";
//    document.getElementById("tab1_label").style.backgroundColor = "#f2f2f2";
//    document.getElementById("tab2_label").style.backgroundColor = "#f2f2f2";
//    document.getElementById("tab3_label").style.backgroundColor = "#f2f2f2";
//    document.getElementById(tab).style.display = "inline-block";
//    document.getElementById(tab + "_label").style.backgroundColor = "#a5a5a5";
//}
