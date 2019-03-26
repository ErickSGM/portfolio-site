import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import AccomplishmentItemPreview from './preview-templates/AccomplishmentItemPreview';
import CurriculumPagePreview from './preview-templates/CurriculumPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('curriculum', CurriculumPagePreview)
CMS.registerPreviewTemplate('accomplishments', AccomplishmentItemPreview)
