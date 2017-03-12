var React = require('react');

function Quarters(game) {
  return(
    <thead>
      <tr>
        <th></th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        {(game.quarter && game.quarter.quarter[4]) && <th>OT</th>}
        {(game.quarter && game.quarter.quarter[5]) && <th>2OT</th>}
        {(game.quarter && game.quarter.quarter[6]) && <th>3OT</th>}
        <th></th>
      </tr>
    </thead>
  )
}

module.exports = Quarters;
