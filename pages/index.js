import AdminBuilder from '../components/AdminBuilder';
import library from '../components/widgets';
import Default from '../components/layouts/Default.js'

const PAGE = {
  id: null,
  slug: 'example-slug',
  title: 'Example page',
  description: 'Example description',
  widgets: [],
}

export default () => (
  <Default>
    <AdminBuilder library={library} page={PAGE} />
  </Default>
)