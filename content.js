// SUMMARY
// WHEN: Run the hideAds function when the page loads. runs immediately when the script loads
// WHAT: Hides elements with common ad class names by setting their display style to 'none'.

//  ~ const adClasses => list of common ad class names
//  ~ forEach method to iterate over each class in the adClasses
//      document.querySelectorAll(className) to find all elements on the page that have that class:
//      querySelectorAll returns a NodeList of all elements matching the selector.  
//  ~ Then, it iterates over each of these elements using another forEach loop:
//    For each element, it sets its style.display property to 'none'
//    (This CSS change makes the element invisible on the page.)
function hideAds() {
    const adClasses = ['.ad', '.advertisement', '.banner-ad'];
    adClasses.forEach(className => {
      const elements = document.querySelectorAll(className);
      elements.forEach(el => el.style.display = 'none');
    });
  }
  
  hideAds();
  
  // DEAL WITH DYNAMIC ADDS
  // It sets up a MutationObserver to watch for changes in the DOM
  // and run hideAds() again when changes occur. 
  // This catches ads that might be loaded dynamically after the initial page load.
  const observer = new MutationObserver(hideAds);
  observer.observe(document.body, { childList: true, subtree: true });