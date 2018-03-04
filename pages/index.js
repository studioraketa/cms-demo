import AdminBuilder from '../components/AdminBuilder';
import library from '../components/widgets';

const PAGE = {
  id: null,
  slug: 'example-slug',
  title: 'Example page',
  description: 'Example description',
  widgets: [],
}

export default () => (
  <AdminBuilder library={library} page={PAGE} />
)