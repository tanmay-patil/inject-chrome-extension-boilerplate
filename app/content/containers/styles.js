export default `
.fontFamily {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    font-size: 13px;
}

.toolbar {
    position: fixed;
    width: 100%;
    z-index: 2147483646;
    top: 0px;
}

.headerContainer {
    background-color: #4ba7b4;
    width: 100%;
}

.breadCrumbContainer {
    display: flex;
    padding: 5px;
}

.breadCrumbSetting {
    cursor: pointer;
    display: flex;
}

.editCSS {
    padding: 0;
    background: inherit;
    border: none;
    font-weight: bold;
    font-family: Montserrat,sans-serif;
}

.editCSS:hover {
    cursor: pointer;
}

.editorContainer {
    background-color: #f2f2f2;
}

.pathContainer {
    line-height: 2;
    font-size: 15px;
    cursor: text;
    padding-top: 2px;
    margin-left: 10px;
}

.breadCrumb {
    padding-left: 20px;
    display: flex;
    line-height: 2;
    font-weight: 500;
    flex: 18;
    overflow-x: auto;
    margin-right: 8px;s
}

.breadCrumbElement {
    cursor: pointer;
    font-weight: bold;
}

.nextElementSymbol {
    margin-left: 10px;
    margin-right: 10px;
}

.container {
    background-color: #4ba7b4;
}

.headerContent {
    display: flex;
    padding-right: 16px;
    padding-left: 16px;
}

.expTitle {
    display: flex;
    align-items: center;
    /* font-family: Montserrat; */
    color: #ffffff;
    font-size: 20px;
    /* Approximation due to font substitution */
    font-weight: 400;
    flex: 1;
}

.changeSummary {
    display: flex;
    /* justify-content: flex-end; */
    padding: 17px 0px 17px 10px;
    align-items: center;
}

.changes {
    color: #FFFFFF;
    font-size: 15px;
    font-weight: bold;
    padding-right: 20px;
    cursor: pointer;
}

.done {
    cursor: pointer;
    font-size: 15px;
    line-height: 15px;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5.76px 0.24px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    width: 100px;
    text-align: center;
    color: #4ba8b4;
    font-weight: 600;
}

.save {
    line-height: 32px;
    font-family: Montserrat;
    color: #4ba7b4;
    font-size: 16px;
    font-weight: 600;
}

.drawerFooter {
    position: absolute;
    bottom: 0px;
    margin: 35px;
}

.jsHint {
    color: #000000;
    font-size: 15px;
}

.toolTip {
    // z-Index: 2147483647 !important;
    color: #ee78e6 !important;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    width: 245px;
    white-space: nowrap;
}

.codeMirrorWrapper {
    margin: 10px 0px;
}

.headerTitle {
    /* font-family: Montserrat; */
    color:  #ffffff;
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    padding: 10px;
    cursor: move;
    flex: 1
}

.svgIcon {
    display: flex;
    padding: 10px;
    align-items: center;
    cursor: pointer;
}

.editTextButtons {
    width: 200px;
    padding: 20px;
    background: #d3d3d3;
}

.jsHint {
    color: #000000;
    font-size: 15px;
}

.path {
    position: absolute;
    bottom: 0px;
    border: 1px solid;
    width: 100%;
}

.codeMirror {
    height: 425px;
}
`;
