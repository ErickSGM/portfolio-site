import CMS from 'netlify-cms';

import AccomplishmentItemPreview from './preview-templates/AccomplishmentItemPreview';
import CurriculumPagePreview from './preview-templates/CurriculumPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('curriculum', CurriculumPagePreview)
CMS.registerPreviewTemplate('accomplishments', AccomplishmentItemPreview)
