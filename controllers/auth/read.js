let name = 'auth'

let read = (req, res, next) => res.status(200).render(
  'index', //nombre de la vaista
  {
    title: '/' + name,
    subtitle: 'Endpoint of ' + name
  })

  export default read;