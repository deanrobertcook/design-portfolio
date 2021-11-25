let grid = document.querySelector('.container');
let gap = parseFloat(getComputedStyle(grid).gridRowGap);
let items = [...grid.childNodes].filter(c => c.nodeType === 1);

let prevNcol = 0

function layout() {
  let ncol = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  
  if (ncol !== prevNcol) {
    prevNcol = ncol;
    
    items.forEach(c => c.style.removeProperty('margin-top'));
    
    if (ncol > 1) {
      /**
       * if we have more than one column, examine all but the first row of tiles 
       * (slice drops the first ncol tiles) and push each one up to it's corresponding 
       * i - ncolth neighbour (the one above). After slicing, this will be the ith tile. 
      */
      items.slice(ncol).forEach((c, i) => {
        let prev_fin = items[i].getBoundingClientRect().bottom /* bottom edge of item above */,
        curr_ini = c.getBoundingClientRect().top /* top edge of current item */;
        
        let marginTop = `${prev_fin + gap - curr_ini}px`
        c.style.marginTop = marginTop
      })
    }
  }
}

addEventListener('load', e => {
  layout(); /* initial load */
  addEventListener('resize', layout, false)
}, false);
