import layout from '../templates/layout'
import portfolioItems from '../templates/portfolio/portfolioItems'
const { renderToString } = require('@popeindustries/lit-html-server')
// DELETE once new portfolio from cms is done
// show portfolio item
module.exports = async (req, res) => {
  if (!portfolioItems[req.params[0]]) {
    console.log('Requested missing page: ' + req.params[0])
    return res.redirect('/#portfolio')
  }

  return res.send(await renderToString(layout(portfolioItems[req.params[0]], {
    bodyClass: 'c-page--portfolio-item',
    title: 'Portfolio'
  })))

  // router.get('/:item', (req, res) => {
  //   res.render(`./portfolio/${req.params.item}.hbs`, {
  //     pageClass: 'c-page--portfolio-item',
  //     response: res
  //   }, function (err, html) {
  //     if (err) {
  //       console.log(err)
  //       res.redirect('/#portfolio')
  //     }
  //     res.send(html)
  //   })
  // })
}
