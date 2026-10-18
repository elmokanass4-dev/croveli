// Vector icons avoid font and emoji substitutions on mobile operating systems.
const paths={
  '↗':'M5 19 19 5M5 5h14v14',
  '↘':'m5 5 14 14M5 19h14V5',
  '↓':'M12 4v16m-7-7 7 7 7-7',
  '✳':'M12 2v20M2 12h20M5 5l14 14M5 19 19 5'
};
function icon(symbol){return `<svg class="ui-symbol ${symbol==='✳'?'symbol-spark':'symbol-arrow'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${paths[symbol]}"/></svg>`}
function renderIcons(markup){return markup.replace(/[↗↘↓✳]/g,icon)}
module.exports={renderIcons,paths};
