//----------------- Functions to resize contents window ------------------
var dragMode = false;
var obj = ""

function toDragMode() {
    dragMode = true;
    obj = document.getElementById("tdcontentswrapper");
    //hide the page iframe so that the onMouseUp event will fire properly
    if (document.getElementById("basefrm") != null) {
        document.getElementById("tdpage").style.display = "none";
        document.getElementById("fra_contents").style.display = "none";
    }
}
function startMoving(e) {
    if (!dragMode) return false;
    //obj.style.width = (e.clientX - 10) + 'px';
    var iWidth = (e.clientX - 1) - document.getElementById("tblmain").offsetLeft - document.getElementById("tbldetailwrapper").offsetLeft - document.getElementById("tdcontentswrapper").offsetLeft;
    if (iWidth < 10) { iWidth = 10 }
    obj.style.width = iWidth + "px";
}
function stopMoving() {
    dragMode = false;
    obj = "";
    //Ensure that the page iframe is visible
    if (document.getElementById("basefrm") != null) {
        document.getElementById("tdpage").style.display = "";
        document.getElementById("fra_contents").style.display = "";
    }
    //reposition edit buttons
    if (document.getElementById("basefrm") != null) {
        window_resize();
    }
}
//----------------------------------------------------------------------------


//var curwidth = 0; 
//var curX = 0; 
//var newX = 0; 
//var mouseButtonPos = "up"; 

//function setPos(e) 
//    { 
//    //get the original div width. 
//    //For handling events in ie vs. w3c. 
//    curEvent = ((typeof event == "undefined")? e: event); 
//    mouseButtonPos = "down"; 
//    curX = curEvent.clientX; 
//    //Get the width of the div. 
//    var tempwidth = document.getElementById("tdcontentswrapper").style.width;
//    if (tempwidth == "")
//	    {
//	    //if the width value is blank then this probably means that the width is not defined. get the width from offsetwidth instead
//	    tempwidth = document.getElementById("tdcontentswrapper").offsetWidth; 
//	    curwidth = tempwidth; 
//	    }
//    else
//	    {
//	    //Get the width value. 
//	    var widthArray = tempwidth.split("p"); 
//	    //Set the current width. 
//	    curwidth = parseInt(widthArray[0]); 
//	    }
//    } 
//    
//function getPos(e)
//    { 
//    //changes the width of the div while the mouse button is pressed
//    if( mouseButtonPos == "down" ) 
//        { 
//        //For handling events in ie vs. w3c. 
//        curEvent = ((typeof event == "undefined")? e: event); 
//        //Get new mouse position. 
//        newX = curEvent.clientX; 
//        //Calculate movement in pixels. 

//        var pixelMovement = parseInt(newX - curX); 
//        //Determine new width. 
//        var newwidth = parseInt(curwidth + pixelMovement); 
//        //Enforce a minimum width. 
//        newwidth = ((newwidth < 50)? 50: newwidth); 
//        //Set the new width. 
//        document.getElementById("tdcontentswrapper").style.width = newwidth + "px"; 
//        //Set the new left of the splitter bar. 
//        document.getElementById("tdseparator").style.left = parseInt(document.getElementById("tdcontentswrapper").style.width) + 10; 
//        } 
//    }

function window_resize() {
    //get the height of the header and footer
    var tableHeight = getBrowserHeight() - 4;
    var headerHeight = GetTagHeight("tdheader");
    var footerHeight = GetTagHeight("tdfooter");
    var pageheaderHeight = GetTagHeight("tdpageheader");
    var pagefooterHeight = GetTagHeight("tdpagefooter");
    var contentsheaderHeight = GetTagHeight("tdcontentsheader");
    //alert("contentsHeaderHeight = " + contentsheaderHeight);
    var contentsfooterHeight = GetTagHeight("tdcontentsfooter");
    //calculate the page and contents height
    var pageHeight = tableHeight - headerHeight - footerHeight - pageheaderHeight - pagefooterHeight
    var contentsHeight = tableHeight - headerHeight - footerHeight - contentsheaderHeight - contentsfooterHeight
    var pageWidth = document.getElementById("tdpage").offsetWidth;

    //if (document.getElementById("basefrm") != null) {
    //Resize the skin table to fit the height of the screen
    document.getElementById("tblmain").style.height = tableHeight + "px";
    //Resize the contents cell
    document.getElementById("tdcontents").style.height = contentsHeight + "px";
    //Resize the page cell
    document.getElementById("tdpage").style.height = pageHeight + "px";
    //Set iframe height to fit the page window
    document.getElementById("basefrm").style.height = pageHeight + "px";
    //}
}

function getBrowserHeight() {
    var myHeight = 0;
    if (typeof (window.innerHeight) == 'number') {
        //Non-IE
        myHeight = window.innerHeight;
    }
    else {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    }
    return myHeight;
}

function GetTagHeight(TagID) {
    //var thisHeight = document.getElementById(TagID).style.height;
    var thisHeight = document.getElementById(TagID).offsetHeight;
    //    if (thisHeight.lastIndexOf("px") == -1) {
    //        document.getElementById(TagID).style.height = "100px"
    //        thisHeight = "100"
    //    }
    //    else {
    //        thisHeight = thisHeight.substr(0, thisHeight.lastIndexOf("px"));
    //    }
    //    //convert from string to integer
    //    thisHeight = parseInt(thisHeight);
    return thisHeight;
}


function SearchKeyPress(searchtext, e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;     //IE
    }
    else {
        key = e.which;     //firefox
    }
    if (key == 13) {
        DisplaySearch(searchtext);
        return false;
    }
    else {
        return true;
    }
}

function CopytoClipboard() {
    //alert("copy")
    Copied = txtPageURL.createTextRange();
    Copied.execCommand("Copy");
    document.getElementById("tdlinkmessage").innerHTML = "URL Copied...<br/><br/>"
}

function DisplaySearch(stext, sPageName) {
    //pass the search text to _search.htm
    if (sPageName == "" || sPageName == null) {
        //This is the global search
        var sSearchPage = "_search.htm";
    }
    else {
        //If a pagename was passed then this is a child search
        var sSearchPage = "_search_" + sPageName + ".htm";
    }

    //if the basefrm frame exists then display the search results in the page window.
    if (document.getElementById("basefrm") != null) {
        //window.open(sSearchPage + "?searchField=" + stext, "basefrm");
        window.open(sSearchPage + "?searchField=" + stext + "&type=noframes&chkpreview=on", "basefrm");
    }
    else {
        location.href = sSearchPage + "?searchField=" + stext + "&type=noframes&chkpreview=on";
    }


}



//	function DisplayIndex()
//		{function displayindex
//		ShowIndex();
//		}

function DisplaySearchTab() {
    if (document.getElementById("fra_contents") != null) {
        //Frames Format
    }
    else {
        //Flat
        document.getElementById("div_javascript_index").style.display = "none";
    }
    document.getElementById("div_javascript_contents").style.display = "none";
    document.getElementById("divStaticSearchTab").style.display = "";
    document.getElementById("tdcontentslabel").style.display = "none";
    document.getElementById("tdindexlabel").style.display = "none";
    document.getElementById("tdsearchtablabel").style.display = "";
    document.getElementById("tdCloseContentsWindow").style.display = "";
    if (document.getElementById("tab_contents_up") != null) {
        ClickContentsTab("search");
    }
}

//function DisplaySearchTab() {
//     //if (document.getElementById("fra_contents") != null) {
//    //    //display in contents window
//    //    window.open("_searchTab.htm", "fra_contents");
//        //Show the Search Tab heading and close button
//    document.getElementById("div_javascript_index").style.display = "none";
//    document.getElementById("div_javascript_contents").style.display = "none";
//    document.getElementById("divStaticSearchTab").style.display = "";
//    document.getElementById("tdcontentslabel").style.display = "none";
//    document.getElementById("tdindexlabel").style.display = "none";
//    document.getElementById("tdsearchtablabel").style.display = "";
//    document.getElementById("tdCloseContentsWindow").style.display = "";

//    //}
//}

function DisplayIndex() {
    if (document.getElementById("fra_contents") != null) {
        //display in contents window
        window.open("_keywordindex.htm", "fra_contents");
        document.getElementById("div_javascript_contents").style.display = "";
    }
    else if (document.getElementById("basefrm") != null) {
        window.open("_keywordindex.htm", "basefrm");
    }
    else if (document.getElementById("div_javascript_contents") != null) {
        document.getElementById("div_javascript_index").style.display = "";
        document.getElementById("div_javascript_contents").style.display = "none";
    }
    else {
        location.href = "_index.htm";
    }
    //Show the index heading and close button
    document.getElementById("tdcontentslabel").style.display = "none";
    document.getElementById("tdindexlabel").style.display = "";
    document.getElementById("tdsearchtablabel").style.display = "none";
    document.getElementById("tdCloseContentsWindow").style.display = "";
    document.getElementById("divStaticSearchTab").style.display = "none";
    if (document.getElementById("tab_contents_up") != null) {
        ClickContentsTab("index");
    }

}

function showpageurl() {
    //FRAMES - Get URL from basefrm frame
    var sPageURL = String(window.basefrm.location.href);

    //Remove any parameters (eg. page.aspx?parm1=X)
    if (sPageURL.toLowerCase().indexOf("?") != -1) {
        sPageURL = sPageURL.substr(0, sPageURL.lastIndexOf("?"))
    }
    var sPageName = sPageURL.substr(sPageURL.lastIndexOf("/") + 1)
    //Remove the page name
    sPageURL = sPageURL.substr(0, sPageURL.lastIndexOf("/"))

    var sPageURL = "/index.html?";
    //var sRelativeURL = "help/default.htm?" + sPageName;
    //alert("Frames Page URL = " + sPageURL);
    parent.window.location.href = sPageURL;

}


function DisplayContents() {
    if (document.getElementById("fra_contents") != null) {
        //display in contents window
        window.open("contents.htm", "fra_contents");
    }
    else if (document.getElementById("basefrm") != null) {
        window.open("contents.htm", "basefrm");
    }
    else if (document.getElementById("div_javascript_contents") != null) {
        document.getElementById("div_javascript_index").style.display = "none";
    }
    else {
        location.href = "contents.htm";
    }
    //Show the contents heading and hide the close button
    document.getElementById("tdcontentslabel").style.display = "";
    document.getElementById("tdindexlabel").style.display = "none";
    document.getElementById("tdsearchtablabel").style.display = "none";
    document.getElementById("tdCloseContentsWindow").style.display = "none";
    document.getElementById("div_javascript_contents").style.display = "";
    document.getElementById("divStaticSearchTab").style.display = "none";
    if (document.getElementById("tab_contents_up") != null) {
        ClickContentsTab("contents");
    }

}

function ClickContentsTab(tabname) {
    if (tabname == "contents") {
        document.getElementById("tab_contents_up").style.display = "none";
        document.getElementById("tab_contents_down").style.display = "";
        document.getElementById("tab_index_up").style.display = "";
        document.getElementById("tab_index_down").style.display = "none";
        document.getElementById("tab_search_up").style.display = "";
        document.getElementById("tab_search_down").style.display = "none";
    }

    else if (tabname == "index") {
        document.getElementById("tab_contents_up").style.display = "";
        document.getElementById("tab_contents_down").style.display = "none";
        document.getElementById("tab_index_up").style.display = "none";
        document.getElementById("tab_index_down").style.display = "";
        document.getElementById("tab_search_up").style.display = "";
        document.getElementById("tab_search_down").style.display = "none";
    }

    else if (tabname == "search") {
        document.getElementById("tab_contents_up").style.display = "";
        document.getElementById("tab_contents_down").style.display = "none";
        document.getElementById("tab_index_up").style.display = "";
        document.getElementById("tab_index_down").style.display = "none";
        document.getElementById("tab_search_up").style.display = "none";
        document.getElementById("tab_search_down").style.display = "";
    }
}


//	function ShowContents()
//		{
//		if (document.getElementById("div_javascript_contents") != null)
//		    {
//        	//Hide the index and show the contents
//	    	document.getElementById("div_javascript_index").style.display="none";
//		    document.getElementById("div_javascript_contents").style.display="";
//		    }
//		else
//		    {
//		    //load contents.htm
//   			location.href = "contents.htm";
//		    }
//		}









function addtofav() {
    //    if (document.all) {
    //if there is a basefrm frame then get the URL from there, otherwise get the url for this page.
    if (document.getElementById("basefrm") == null) {
        //FLAT - Get URL from this page
        var sFavURL = String(location.href);
        var sPageName = sFavURL.substr(sFavURL.lastIndexOf("/") + 1)
    }
    else {
        //FRAMES - get URL from the frame
        var sPageURL = String(window.basefrm.location);
        var sPageName = sPageURL.substr(sPageURL.lastIndexOf("/") + 1)
        var sFavURL = window.location.href
    }

    //Remove any parameters from the url (eg. page.aspx?search=X)
    if (sFavURL.indexOf("?") != -1) {
        sFavURL = sFavURL.substr(0, sFavURL.lastIndexOf("?"))
    }

    //Remove any parameters from the pagename (eg. page.aspx?search=X)
    if (sPageName.indexOf("?") != -1) {
        sPageName = sPageName.substr(0, sPageName.lastIndexOf("?"))
    }

    //remove any %20 codes (space codes)
    sPageName = sPageName.replace(/%20/g, " ");
    var sTitle = sPageName;

    if (document.getElementById("basefrm") == null) {
        // --FLAT--
        //window.external.AddFavorite(sFavURL, sTitle);
        AddBookmark(sFavURL, sTitle)
    }
    else {
        // --FRAMES--
        //window.external.AddFavorite(sFavURL + "?" + sPageName, sTitle);
        AddBookmark(sFavURL + "?" + sPageName, sTitle)
    }
    //}
}

function AddBookmark(url, title) {
    //window.external.AddFavorite(projecturl, sTitle);
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
        alert('Press ctrl+D to bookmark (Command+D for macs) after you click Ok');
    } else {
        alert('Press ctrl+D to bookmark (Command+D for macs) after you click Ok');
    }
}


function printpage() {
    //if the basefrm frame exists then print the contents
    if (document.getElementById("basefrm") != null) {
        printframe();
    }
    else {
        //If this is IE then print the cell containing the page HTML. If this is another browser then print the entire page.
        if (navigator.userAgent.toLowerCase().indexOf("ie") == -1) {
            //Current browser is not IE
            window.print();
        }
        else {
            //Current browser is IE
            print_noframes();
        }
    }
}


function printframe() {
    //print the basefrm frame
    window.frames['basefrm'].focus();
    window.frames['basefrm'].print();
}

function print_noframes() {
    var printIframe = document.createElement("IFRAME");
    document.body.appendChild(printIframe);
    var printDocument = printIframe.contentWindow.document;
    printDocument.designMode = "on";
    printDocument.open();
    var currentLocation = document.location.href;
    currentLocation = currentLocation.substring(0, currentLocation.lastIndexOf("/") + 1);

    try {
        if (document.all) {
            var htmlcontent = document.getElementById("tdpage")
            printDocument.write("<html><head></head><body>" + htmlcontent.innerHTML + "</body></html>");
            printDocument.close();
            var oLink = printDocument.createElement("link");
            oLink.setAttribute("href", currentLocation + "pagestyles.css", 0);
            oLink.setAttribute("type", "text/css");
            oLink.setAttribute("rel", "stylesheet", 0);
            printDocument.getElementsByTagName("head")[0].appendChild(oLink);
            printDocument.execCommand("Print");
        }
        else {
            printDocument.body.innerHTML = "<link rel='stylesheet' type='text/css' href='" + currentLocation + "pagestyles.css'></link>" + printDocument.body.innerHTML;
            printIframe.contentWindow.print();
        }
    }
    catch (ex) {
    }
    document.body.removeChild(printIframe);
}


function loadStartupPage() {
    //if a page was passed in the url,load it now
    if (top.location.href.lastIndexOf("?") > 0) {
        //attempt to get the file name that was passed
        var sPage = top.location.href.substring(top.location.href.lastIndexOf("?") + 1, top.location.href.length);
        //if the prefix is .htm then load the page, otherwise don't do anything
        //if (sPage.toLowerCase().substring(sPage.length-4, sPage.length) == ".htm")
        if (sPage.toLowerCase().lastIndexOf(".htm") > 0) {
            var myframe = document.getElementById("basefrm");
            //if the 'basefrm' frame is not found then assume that this is a "no-frames" help system
            if (myframe == null) {
                location.href = sPage;
            }
            else {
                document.getElementById("basefrm").src = sPage;
            }
        }
        else if (sPage.toLowerCase() == "index") {
            ShowIndex();
        }
    }

}


function loadpage(pageid, sfile) {
    //if sfile has a value then this means that this is an external page
    if (sfile != null && sfile != "undefined" && sfile != "") {
        //External page
        var pageurl = sfile
    }
    else {
        //Internal Page
        var pageurl = pageid + ".htm"
    }


    //if a page was passed in the url,load it now
    if (pageid != null && pageid != "" && pageid != "undefined") {
        var myframe = document.getElementById("basefrm");
        //if the 'basefrm' frame is not found then assume that this is a "no-frames" help system
        if (myframe == null) {
            location.href = pageurl;
        }
        else {
            document.getElementById("basefrm").src = pageurl;
        }

    }

}



function previouspage() {
    onclick = history.back()
}

function nextpage() {
    onclick = history.forward()
}

function showhomepage(homepage) {
    if (document.getElementById("basefrm") != null) {
        window.open(homepage, "basefrm");
    }
    else {
        location.href = homepage;
    }
}

function browse() {
    if (document.getElementById("basefrm") != null) {
        window.open("contents.htm", "basefrm");
    }
    else {
        location.href = "contents.htm";
    }
}

function showaskpage() {
    if (document.getElementById("basefrm") != null) {
        window.open("ask.htm", "basefrm");
    }
    else {
        location.href = "ask.htm";
    }
}


function showoptions() {
    //if the options form is already displayed then hide it
    if (document.getElementById("tbloptions").style.display == "") {
        document.getElementById("tbloptions").style.display = "none";
    }
    else {
        document.getElementById("tbloptions").style.display = "";
        document.getElementById("tbloptions").focus();
        //position the options list below the options button
        document.getElementById("tbloptions").style.top = document.getElementById("imgoptions").offsetTop + document.getElementById("imgoptions").offsetHeight;
        document.getElementById("tbloptions").style.left = document.getElementById("imgoptions").offsetLeft + document.getElementById("imgoptions").offsetWidth - 198;
    }
}