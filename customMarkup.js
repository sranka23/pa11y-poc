const templateMarkup = `
<style>
    select{
      background: #eee;
      padding: 15px 0;
      width: 200px;
      font-size: 18px;
      margin: 0 auto;
      display: block;
      border: 0;
      border-bottom: 1px solid #000;
    }
    .top-wrapper{
      background: #eee;
    }
    .item-container{
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
</style>
<script>
    function changeViewClass(classname, css) {
      var divsToHide = document.getElementsByClassName(classname); 
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = css; 
      }
    }
    function handlechange(){
      const e = document.getElementById("viewFilter");
      changeViewClass("result", "none")
      changeViewClass(e.options[e.selectedIndex].value, "block")
      changeViewClass("count", "inline-block")
      
    }
    window.onload = function(){
      const e = document.getElementById("viewFilter");
      e.addEventListener("change", handlechange);
    }
</script>
<div class="top-wrapper">
  <div class="item-container">
    <select id="viewFilter">
        <option value="result">All</option>
        <option value="error">Error</option>
        <option value="notice">Notices</option>
        <option value="warning">Warnings</option>
    </select>
  </div>
</div>`;

module.exports = templateMarkup;