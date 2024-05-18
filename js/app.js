
function showContent(contentItem){

  const dynamicContentElements=document.getElementsByClassName("content");
  const showedContentElement=document.getElementsByClassName(contentItem);

  changeStyleDisplay(dynamicContentElements,"none");
  changeStyleDisplay(showedContentElement,"block");

}
function changeStyleDisplay(collectionName, action){

  for (const classElement of collectionName){
    classElement.style.display=action;
  }

}
